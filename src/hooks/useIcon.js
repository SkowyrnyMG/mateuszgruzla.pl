import { graphql, useStaticQuery } from 'gatsby';

export const useIcon = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "icons" } }, sort: { order: ASC, fields: name }) {
        images: edges {
          node {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return {
    gsapIcon: images[0].node.childImageSharp.fluid,
    gatsbyIcon: images[1].node.childImageSharp.fluid,
    javascriptIcon: images[2].node.childImageSharp.fluid,
    jestIcon: images[3].node.childImageSharp.fluid,
    reactIcon: images[4].node.childImageSharp.fluid,
  };
};
