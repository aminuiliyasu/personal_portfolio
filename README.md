# Personal Portfolio

My portfolio website built with React and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site.

## Build

```bash
npm run build
```

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository on GitHub: `https://github.com/aminuiliyasu/personal_portfolio`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### Manual Deployment

If you prefer to deploy manually:

1. Build the project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch

### Base Path Configuration

The `vite.config.js` is configured with `base: '/personal_portfolio/'` for GitHub Pages project sites. 

- If your site is at `username.github.io/personal_portfolio/`, keep the current configuration
- If you're using a custom domain or deploying to `username.github.io` (root), change the base to `'/'` in `vite.config.js`

### Troubleshooting

If your page is blank or not showing content:

1. **Check GitHub Actions**: Go to the **Actions** tab in your repository and verify the workflow completed successfully
2. **Verify GitHub Pages Settings**: Ensure **Settings** → **Pages** → **Source** is set to **GitHub Actions**
3. **Check the URL**: Make sure you're visiting the correct URL: `https://aminuiliyasu.github.io/personal_portfolio/`
4. **Clear Browser Cache**: Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) or open in an incognito window
5. **Check Browser Console**: Open Developer Tools (F12) and check for any JavaScript errors
6. **Verify Base Path**: If deploying to a custom domain, change `base: '/personal_portfolio/'` to `base: '/'` in `vite.config.js` and rebuild

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Icons

