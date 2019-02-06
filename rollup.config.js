// import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve"; //加载查找外部模块
import babel from "rollup-plugin-babel"; // babel
import serve from "rollup-plugin-serve"; // dev server
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import { minify } from "uglify-es";
const isDev = process.env.NODE_ENV === "dev";

export default [
  {
    input: "src/main.ts",
    output: {
      name: "_",
      file: "dist/z.min.js",
      format: "umd"
    },
    plugins: [
      resolve({
        extensions: [".js", ".ts"]
      }),
      commonjs({
        include: "node_modules/**"
      }),
      babel({
        extensions: [".js", ".ts"],
        runtimeHelpers: true,
        exclude: ["node_modules/**"]
      }),
      isDev ? serve() : uglify({}, minify)
    ]
  },
  {
    input: "src/main.ts",
    output: { file: "dist/z.esm.js", format: "es" },
    plugins: [
      resolve({
        extensions: [".js", ".ts"]
      }),
      commonjs({
        include: "node_modules/**"
      }),
      babel({
        extensions: [".js", ".ts"],
        runtimeHelpers: true,
        exclude: ["node_modules/**"]
      })
    ]
  }
];
