const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const folders = ['Algomania1', 'Algomania2', 'Bootstrap', 'NLP'];
const inputBase = path.join(__dirname, '../public');
const outputBase = path.join(__dirname, '../public');

async function optimizeEventImages() {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let filesProcessed = 0;

  for (const folder of folders) {
    const inputDir = path.join(inputBase, folder);
    const outputDir = path.join(outputBase, `${folder}_optimized`);

    try {
      await fs.mkdir(outputDir, { recursive: true });
      const files = await fs.readdir(inputDir);
      const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

      console.log(`\n📁 Processing ${folder}: ${imageFiles.length} images`);

      for (const file of imageFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

        const originalStats = await fs.stat(inputPath);
        totalOriginalSize += originalStats.size;

        // Optimize with responsive sizes
        await sharp(inputPath)
          .resize(1200, 1200, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 85 })
          .toFile(outputPath);

        const newStats = await fs.stat(outputPath);
        totalOptimizedSize += newStats.size;
        filesProcessed++;

        const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);
        console.log(`  ✓ ${file}: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);
      }
    } catch (error) {
      console.error(`Error processing ${folder}:`, error.message);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
}

optimizeEventImages();
