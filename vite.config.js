import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // base: "/geevo-smoothie/", // don't need if you use domain
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
