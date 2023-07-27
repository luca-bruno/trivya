import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@entities": "/src/entities",
      "@hooks": "/src/hooks",
      "@services": "/src/services",
      "@shared": "/src/shared",
      "@utils": "/src/utils"
    }
  }
})
