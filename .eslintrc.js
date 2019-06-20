module.exports = {
  env: {
    jest: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"]
  }
};
