import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import textshadow from 'node_modules/tailwindcss-textshadow'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
 
})
