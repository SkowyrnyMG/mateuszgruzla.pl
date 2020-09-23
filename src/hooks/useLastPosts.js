import { graphql, useStaticQuery } from 'gatsby';

export const useLastPosts = () => {
  const {
    allMdx: { posts },
  } = useStaticQuery(graphql`
    query {
      allMdx(limit: 2, sort: { order: DESC, fields: frontmatter___date }) {
        posts: edges {
          node {
            frontmatter {
              title
              description
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
