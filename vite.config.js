import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
const { appConfig } = require("./package.json")
const { port } = appConfig

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: port
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"],
    include: ["clipboard-copy"]
  },
  resolve: {
    dedupe: ["@roxi/routify"]
  },
  plugins: [svelte()]
})