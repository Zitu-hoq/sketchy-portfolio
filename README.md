# Portfolio

Hand-drawn style portfolio built with Next.js 16, Appwrite, and wired-elements.

## Tech Stack

- **Framework:** Next.js 16 (App Router, webpack)
- **Backend:** Appwrite SDK (database)
- **Styling:** Tailwind CSS 4, tw-animate-css
- **UI:** wired-elements-react (hand-drawn components)
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light)

## Prerequisites

- Node.js 20+
- Appwrite account with database and collections

## Setup

```bash
git clone https://github.com/Zitu-hoq/sketchy-portfolio.git
cd portfolio
npm install
cp .env.local .env.example
```

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Start production server
```

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Project Structure

```
app/             # Next.js App Router pages
├── about/       # About page
├── work/        # Work / project pages
├── api/         # API routes
├── layout.tsx   # Root layout
├── page.tsx     # Home page
├── error.tsx    # Error boundary
└── not-found.tsx # 404 page

components/      # Shared components
context/         # DataContext (Appwrite data provider)
lib/             # Utilities (Appwrite client, rate limiter)
public/          # Static assets
```
