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
    cssIcon: images[5].node.childImageSharp.fluid,
    figmaIcon: images[6].node.childImageSharp.fluid,
    firebaseIcon: images[7].node.childImageSharp.fluid,
    gitIcon: images[8].node.childImageSharp.fluid,
    githubIcon: images[9].node.childImageSharp.fluid,
    graphqlIcon: images[10].node.childImageSharp.fluid,
    htmlIcon: images[11].node.childImageSharp.fluid,
    netlifyIcon: images[12].node.childImageSharp.fluid,
    sassIcon: images[13].node.childImageSharp.fluid,
  };
};
