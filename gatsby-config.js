const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const myQuery = `
query {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          authors {
            author
          }
          tags
        }
        slug
      }
    }
  }
}
`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allMdx.edges.map((edge) => edge.node),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  },
];

module.exports = {
  siteMetadata: {
    title: `Mateusz Gruźla - Frontend developer with passion and dreams`,
    author: {
      name: `Mateusz Gruźla`,
      summary: `who dreams to become developer`,
    },
    description: `I am Mateusz Gruźle the Frontend developer with passion and dreams`,
    siteUrl: `https://mateuszgruzla.pl/`,
    social: {
      twitter: `gruzlamateusz`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/components/templates'),
        // sections: path.join(__dirname, 'src/components/sections'),
        assets: path.join(__dirname, 'src/assets'),
        theme: path.join(__dirname, 'src/theme'),
        context: path.join(__dirname, 'src/context'),
        // routes: path.join(__dirname, 'src/routes'),
        // vendors: path.join(__dirname, 'src/vendors'),
        utils: path.join(__dirname, 'src/utils'),
        // contexts: path.join(__dirname, 'src/contexts'),
        // providers: path.join(__dirname, 'src/providers'),
        hooks: path.join(__dirname, 'src/hooks'),
        // helpers: path.join(__dirname, 'src/helpers'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/icons`,
        name: `icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/utils/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-transformer-remark',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://mateuszgruzla.us2.list-manage.com/subscribe/post?u=3634ebdfeae4af3d2f2de92a4&amp;id=5b2295008d',
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateusz Gruźla - Frontend developer with passion and dreams`,
        short_name: `Mateusz Gruźla webpage`,
        start_url: `/`,
        background_color: `#12181B`,
        theme_color: `#FFD829`,
        display: `minimal-ui`,
        icon: `content/assets/mg-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mateuszgruzla-pl`,
      },
    },

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        settings: {},
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified'],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
