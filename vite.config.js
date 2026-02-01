import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages project sites: base: '/personal_portfolio/'
// For GitHub Pages user sites (username.github.io): base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/personal_portfolio/',
})
