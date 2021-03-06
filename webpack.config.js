const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "nz-bank-account-info-international-money-transfer",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
            plugins: ["@babel/plugin-transform-spread"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
