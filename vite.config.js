import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    ssr: "src/index.ts",
    rollupOptions: { output: { format: "esm" } },
  },
});
