const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "nz-bank-account-info-international-money-transfer",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: "/.js?$/",
        exclude: "/node_modules/",
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
