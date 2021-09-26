module.exports = {
  siteMetadata: {
    title: 'Louis Cruz',
    description:
      'This is the personal website of Louis Cruz, software engineer.',
    author: 'Louis Cruz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-image',
      options: {
        quality: 100,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Louis Cruz',
        short_name: 'Louis Cruz',
        start_url: '/',
        background_color: '#666',
        theme_color: '#666',
        display: 'minimal-ui',
        icon: 'src/images/profile.jpeg',
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-mdx',
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/components/Layout.tsx'),
    //     },
    //   },
    // },
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout/index.tsx'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
