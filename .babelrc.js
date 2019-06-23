const presets = [["@babel/preset-env", { targets: { node: "current" } }]];
const plugins = ["@babel/plugin-transform-spread"];

module.exports = {
  plugins,
  presets
};
