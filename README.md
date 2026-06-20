# Rajasthani Portfolio

Oil painting portfolio for traditional Rajasthani forts and majestic havelis.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize

1. **Your paintings** — Add images to `public/paintings/` and update `src/data/paintings.js` with titles, sizes, and paths like `/paintings/amber-fort.jpg`.
2. **About section** — Replace the portrait placeholder in `src/components/About.jsx` with your photo.
3. **Contact** — Update the email and Instagram handle in `src/components/Contact.jsx`.
4. **Site title** — Edit `index.html` and the logo text in `src/components/Header.jsx`.

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder can be deployed to Netlify, Vercel, GitHub Pages, or any static host.
