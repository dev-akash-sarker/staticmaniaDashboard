import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";
// import { fileURLToPath, URL } from "node:url";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss, autoprefixer],
//     },
//   },
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });
