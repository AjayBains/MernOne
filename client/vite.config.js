import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        secure: false,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  plugins: [react()],
});
