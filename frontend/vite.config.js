import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        // target: "https://twitter-api-st2l.onrender.com", 23/11 ye comment karu che
        target: "https://twitter-clone-main-uldb.onrender.com",
        // target: "http://localhost:7000/",
        changeOrigin: true,
      },
    },
  },
});
