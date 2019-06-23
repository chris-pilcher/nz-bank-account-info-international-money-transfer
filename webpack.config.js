module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/lib",
    filename: "index.js",
    library: "nz-bank-account-info-international-money-transfer",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
