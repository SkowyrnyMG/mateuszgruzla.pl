import { graphql, useStaticQuery } from 'gatsby';

export const useImg = () => {
  const {
    allFile: { images },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { order: ASC, fields: name }) {
        images: edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return {
    knsBigScreen: images[0].node.childImageSharp.fluid,
    knsMobile: images[1].node.childImageSharp.fluid,
    knsTablet: images[2].node.childImageSharp.fluid,
    aboutComodore: images[3].node.childImageSharp.fluid,
    aboutHelloroman: images[4].node.childImageSharp.fluid,
    invoicingAppBigScreen: images[5].node.childImageSharp.fluid,
    invoicingAppTablet: images[6].node.childImageSharp.fluid,
    invoicingAppMobile: images[7].node.childImageSharp.fluid,
    livesessionLogo: images[8].node.childImageSharp.fluid,
    defaultImg: images[9].node.childImageSharp.fluid,
  };
};
