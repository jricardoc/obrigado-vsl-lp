import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Duas páginas: a do Brasil (/) e a LATAM em espanhol (/es/)
  build: { rollupOptions: { input: { main: 'index.html', es: 'es/index.html' } } },
})
