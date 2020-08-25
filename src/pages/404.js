import React from 'react';

import SEO from 'components/seo';
import Layout from 'components/layout';

const NotFoundPage = () => {
  return (
    <Layout title='404'>
      <SEO title='404: Page not found' />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
