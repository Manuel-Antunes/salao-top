const plugins = require("./src/config/plugins");
const siteMetadata = require('./src/config/metadata');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
