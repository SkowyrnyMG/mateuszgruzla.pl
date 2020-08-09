import React from 'react';

import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout title='404'>
      <SEO title='404: Not Found' />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

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
