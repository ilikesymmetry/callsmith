import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import preserveDirective from "./rollup-preserve-directive-plugin.mjs";

import { fileURLToPath } from "url";
import path from "path";

// Polyfill for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: {
    client: "./src/client.tsx",
    server: "./src/server.tsx",
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
      entryFileNames: "[name].js",
    },
    {
      dir: "dist",
      format: "es",
      sourcemap: true,
      entryFileNames: "[name].es.js",
    },
  ],
  plugins: [
    preserveDirective(),
    peerDepsExternal(),
    alias({
      entries: [
        {
          find: "react/jsx-runtime",
          replacement: path.resolve(
            __dirname,
            "node_modules/react/jsx-runtime.js"
          ),
        },
      ],
    }),
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }), // Resolve node modules
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }), // Configure TypeScript
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Add the necessary file extensions
      // exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
        "@babel/preset-typescript",
      ],
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
  external: ["react", "react-dom", "next"],
};
