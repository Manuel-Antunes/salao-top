const path = require("path");

const plugins = [
  "gatsby-plugin-postcss",
  "gatsby-plugin-image",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: path.resolve(__dirname, "../images/"),
    },
    __key: "images",
  },
];

module.exports = plugins;
