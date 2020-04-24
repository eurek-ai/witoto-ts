import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.browser,
      format: "umd",
      name: "witoto-ts"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    typescript({ lib: ["es5", "es6", "dom"], target: "es5" }),
    terser(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["dynamoose"]
};
