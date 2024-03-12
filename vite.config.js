import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/apivite': {
        target: 'https://liverpool080.amocrm.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apivite/, ''),
      }
    }
  }
})