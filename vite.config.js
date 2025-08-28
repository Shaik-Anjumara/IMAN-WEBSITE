 import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "IMAN-WEBSITE" with your repo name
export default defineConfig({
  plugins: [react()],
  base: "/IMAN-WEBSITE/",
});
