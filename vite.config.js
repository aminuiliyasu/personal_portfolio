import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of the custom domain (aminuiliyasu.com).
// If you ever revert to the GitHub Pages project URL
// (aminuiliyasu.github.io/personal_portfolio/), set base back to '/personal_portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
