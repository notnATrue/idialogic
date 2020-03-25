require("@babel/register")({
  presets: ["@babel/preset-env"]
});

module.exports = require('./index.js');
module.exports = require('./src/services/start.point.js');