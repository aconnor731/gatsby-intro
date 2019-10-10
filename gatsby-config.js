module.exports = {
    siteMetadata: {
        title: 'Frontend Masters Gatsby Workshop',
        description: 'A site we built together during a full-day workshop',
        author: 'Austin'
    },
    plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#6b37bf`,
          theme_color: `#6b37bf`,
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: `standalone`,
          icon: `images/favicon.ico`, // This path is relative to the root of the site.
        },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js')
            },
            gatsbyRemarkPlugins: [
                { resolve: 'gatsby-remark-images' }
            ]
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: 'posts',
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: 'images',
        }
    },
    {
        resolve: 'gatsby-source-instagram',
        options: {
            username: 'gatsbyjs'
        }
    },
    {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
            production: true,
            disable: !process.env.ANALYZE_BUNDLE_SIZE,
            generateStatsFile: true,
            analyzerMode: 'static'
        }
    }
],
}