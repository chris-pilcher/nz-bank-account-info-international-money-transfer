module.exports = {
  env: {
    jest: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/prefer-default-export": ["off"],
    "prettier/prettier": ["error"]
  }
};
