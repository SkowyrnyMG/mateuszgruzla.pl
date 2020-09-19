import { graphql, useStaticQuery } from 'gatsby';

export const useLastPosts = () => {
  const {
    allMdx: { posts },
  } = useStaticQuery(graphql`
    query {
      allMdx {
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
