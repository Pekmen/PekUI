/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ".setupTests.js",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "PekUI",
      formats: ["es", "umd"],
      fileName: (format) => `pekui-core.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
