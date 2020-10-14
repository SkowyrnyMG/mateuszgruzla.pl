import { graphql, useStaticQuery } from 'gatsby';

export const useLastPosts = () => {
  const {
    allMdx: { posts },
  } = useStaticQuery(graphql`
    query {
      allMdx(limit: 8, sort: { order: DESC, fields: frontmatter___date }) {
        posts: edges {
          node {
            frontmatter {
              title
              description
              tags
              date(formatString: "MMMM DD, YYYY")
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            slug
            id
          }
        }
      }
    }
  `);

  return posts;
};
