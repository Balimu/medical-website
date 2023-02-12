//import { fileURLToPath, URL } from "node:url";
//import tailwindcss from 'tailwindcss';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/medical-website/',
  plugins: [vue(),
  //  tailwindcss(),
  ],
  resolve: {
    /*alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },*/
  },
});
