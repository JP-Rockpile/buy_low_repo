# BuyLow - Link Directory Website

BuyLow is a single-page React application that hosts curated links to e-commerce websites with a clean, modern interface. It features infinite scrolling and tag-based filtering.

## Features

- 📱 Responsive design for all devices
- ♾️ Infinite scrolling for seamless browsing
- 🏷️ Tag-based navigation
- 🎨 Clean, e-commerce friendly UI with modern design
- ⚡ Built with React, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/buy-low.git
cd buy-low
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Tech Stack

- React 
- TypeScript
- Tailwind CSS
- Vite
- react-infinite-scroll-component

## Customization

### Adding New Websites

To add new websites, edit the `src/data/mockData.ts` file and add new entries to the `WEBSITE_LINKS` array.

### Adding New Tags

To add new navigation tags, edit the `src/data/mockData.ts` file and add new entries to the `TAGS` array.

### Styling

The website uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.js`. The main colors are:

- Primary (Blue): Used for buttons, links, and highlights
- Secondary (Orange): Used for accents and secondary elements

Font: Inter (a user-friendly font ideal for e-commerce websites)

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## License

MIT
