const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: {
    app: "./public/assets/js/index.js",
    db: "./public/assets/js/idb.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js",
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker app",
      short_name: "Budget",
      description:
        "An application that allows you to track your withdrawals and deposits.",
      background_color: "#ffffff",
      theme_color: "#317EFB",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/icons/icon-512x512.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
