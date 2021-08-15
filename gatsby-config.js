module.exports = {
  siteMetadata: {
    title: `Louis Cruz`,
    description: `This is the personal website of Louis Cruz, software engineer.`,
    author: `Louis Cruz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Louis Cruz`,
        short_name: `Louis Cruz`,
        start_url: `/`,
        background_color: `#666`,
        theme_color: `#666`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpeg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
