module.exports = {
  env: {
    jest: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/export": ["off"],
    "prettier/prettier": ["error"]
  }
};
