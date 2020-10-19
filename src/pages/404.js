import React from 'react';
import styled from 'styled-components';

import SEO from 'utils/seo';
import Layout from 'utils/layout';
import GridView from 'utils/grid-view';
import { routes } from 'utils/routes';
import RecentPosts from 'components/modules/recent-posts/recent-posts';

import Button from 'components/atoms/button';
import Devider from 'components/modules/devider/devider';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;

  ${({ theme: { base } }) => base.mq.smallTablet} {
    padding-top: 5em;
  }
`;

const PostsWrapper = styled.div`
  margin: 0 auto;
  margin-top: 4em;
  margin-bottom: 0;
  max-width: 900px;
`;

const ContentWrapper = styled.div`
  * {
    margin-bottom: 4em;
  }
`;

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} title='404'>
      <SEO title='404: Page not found' />
      <Wrapper>
        <GridView>
          <Devider title='notfound.' highlightEnd='3' highlightColor={({ theme: { base } }) => base.accent.tertiary} />
          <ContentWrapper>
            <iframe
              title='Goat Scream like a person'
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/1PXCBpVs3k4'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullscreen
            />
            <p>
              Unfortunately, you&apos;ve reached the page that doesn&apos;t exist. You can click on the button below and go to the home page or you can stay and listen to how the
              goat scream&apos;s like a person. Your choice!{' '}
              <span role='img' aria-label='lol'>
                😅
              </span>
            </p>
            <Button btnType='inner' path={routes.home}>
              Go to homepage
            </Button>
            <PostsWrapper>
              <RecentPosts />
            </PostsWrapper>
          </ContentWrapper>
        </GridView>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
