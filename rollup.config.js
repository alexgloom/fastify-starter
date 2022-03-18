import run from "@rollup/plugin-run";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";

const dev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
  input: "src/index.ts",
  output: { file: "index.js", format: "esm" },
  external: ["fastify", "node:process"],
  plugins: [esbuild(), dev && run({ allowRestarts: true })],
});
