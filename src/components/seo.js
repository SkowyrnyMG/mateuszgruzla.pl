// /**
//  * SEO component that queries for data with
//  *  Gatsby's useStaticQuery React hook
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

<<<<<<< HEAD
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

// const SEO = ({ description, lang, meta, title }) => {
//   // const { site } = useStaticQuery(
//   //   graphql`
//   //     query {
//   //       site {
//   //         siteMetadata {
//   //           title
//   //           description
//   //           social {
//   //             twitter
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `
//   // )

//   const metaDescription = description || site.siteMetadata.description;
=======
// import React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// const SEO = ({ description, lang, meta, title }) => {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             social {
//               twitter
//             }
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
>>>>>>> maintenance

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.social.twitter,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
<<<<<<< HEAD
//   );
// };
=======
//   )
// }
>>>>>>> maintenance

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
<<<<<<< HEAD
// };
=======
// }
>>>>>>> maintenance

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
<<<<<<< HEAD
// };

// export default SEO;
=======
// }

// export default SEO
>>>>>>> maintenance
