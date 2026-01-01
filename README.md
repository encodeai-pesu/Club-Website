# EncodeAI Club Website

Official website showcasing EncodeAI events, hackathons, workshops, and team members.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + Radix UI
- **Package Manager:** pnpm
- **Analytics:** Vercel Analytics

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

To install pnpm globally:
```bash
npm install -g pnpm
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/encodeai-pesu/Club-Website.git
   cd Club-Website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or if using npm:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server:

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page will automatically reload when you make changes to the code.

## Building for Production

Create an optimized production build:

```bash
pnpm build
```

Then start the production server:

```bash
pnpm start
```

## Linting

Run the linter to check for code quality issues:

```bash
pnpm lint
```

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── algomania-1/       # Event pages
│   ├── algomania-2/
│   ├── bootstrap/
│   ├── events/
│   ├── hackathon/
│   ├── nlp-workshop/
│   ├── teams/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── sidebar.tsx
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── package.json          # Project dependencies
```
