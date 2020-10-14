const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const blogTemplate = path.resolve('./src/templates/blog.js');

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                      originalImg
                    }
                  }
                }
              }
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    pathPrefix: '/blog',
    component: blogTemplate,
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/blog/${post.node.slug}`,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
