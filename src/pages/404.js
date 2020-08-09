import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} title='404'>
<<<<<<< HEAD
      {/* <SEO title='404: Not Found' description='not found' /> */}
=======
      <SEO title='404: Not Found' />
>>>>>>> maintenance
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};
<<<<<<< HEAD

export default NotFoundPage;
=======

export default NotFoundPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
>>>>>>> maintenance
