import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
   server: {
    proxy: {
      '/ws-chat': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying
      },
    },
  },
})
