import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages project sites are served from /<repo>/, so the deploy
// workflow sets VITE_BASE=/mansy-portfolio/. Local dev stays at /.
const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          const p = id.replace(/\\/g, '/')
          if (!p.includes('node_modules/')) return undefined
          if (p.includes('/react-router')) return 'router'
          if (p.includes('/lucide-react/')) return 'icons'
          if (p.includes('/react-dom/') || p.includes('/react/') || p.includes('/scheduler/')) {
            return 'react'
          }
          return 'vendor'
        },
      },
    },
  },
  server: {
    allowedHosts: ['.trycloudflare.com', '.loca.lt'],
  },
})
