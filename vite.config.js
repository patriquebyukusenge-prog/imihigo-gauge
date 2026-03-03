import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'imihigo-gauge' below with your GitHub repository name if different
export default defineConfig({
  plugins: [react()],
  base: '/imihigo-gauge/',
})
