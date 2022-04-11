const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./public/assets/js/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "service.worker.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
