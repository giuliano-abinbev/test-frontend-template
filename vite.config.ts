import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use PORT from environment or default to 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      $assets: path.resolve(__dirname, "./src/assets"),
      $components: path.resolve(__dirname, "./src/components"),
      $screens: path.resolve(__dirname, "./src/screens"),
    },
  },
});
