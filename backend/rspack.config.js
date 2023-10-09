const path = require("path");
const slsw = require("serverless-rspack");
const nodeExternals = require("webpack-node-externals");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: slsw.lib.entries,
  mode: slsw.lib.rspack.isLocal ? "development" : "production",
  target: "node",
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".rspack"),
    filename: "[name].js",
  },
  stats: "normal",
  // can use rspack-node-externals to exclude all node deps
  externals: [nodeExternals()],
  builtins: {},
  module: {
    rules: [],
  },
};
