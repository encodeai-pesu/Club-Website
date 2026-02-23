const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const inputDir = path.join(__dirname, '../public/profile_pictures_png');
const outputDir = path.join(__dirname, '../public/profile_pictures_optimized');

async function optimizeImages() {
  try {
    // Create output directory
    await fs.mkdir(outputDir, { recursive: true });

    // Read all files
    const files = await fs.readdir(inputDir);
    const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to optimize`);

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const file of pngFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

      // Get original size
      const originalStats = await fs.stat(inputPath);
      totalOriginalSize += originalStats.size;

      // Optimize and convert to WebP
      await sharp(inputPath)
        .resize(400, 400, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      // Get new size
      const newStats = await fs.stat(outputPath);
      totalOptimizedSize += newStats.size;

      const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`✓ ${file}: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);
    }

    console.log('\n=== Summary ===');
    console.log(`Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Total reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
    console.log(`\nOptimized images saved to: ${outputDir}`);
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
