const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Marcin Barszcz`,
    description: `Portfolio na GatsbyJS`,
    author: `@marcinbarszcz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MarcinBarszcz",
        short_name: "MarcinBarszcz",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
