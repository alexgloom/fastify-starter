import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: true,
    rollupOptions: {
      input: "src/index.ts",
      output: {
        format: "esm",
      },
    },
  },
});
