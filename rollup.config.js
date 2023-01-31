const ts = require("rollup-plugin-ts");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const pkg = require("./package.json");

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

module.exports = [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", globals },
      { file: pkg.module, format: "es", globals },
    ],
    plugins: [
      commonjs(),
      resolve(),
      ts({ transpiler: "babel", tsconfig: "tsconfig.json" }),
    ],
    external: Object.keys(globals),
  },
];
