import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://project-pokeinfo.onrender.com',
        // target: 'http://localhost:3000',
      }
    }
  }
})
