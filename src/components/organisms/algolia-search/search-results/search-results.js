import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { connectStateResults, Highlight, Hits, Index, PoweredBy } from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchState, searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 && searchState && searchState.query ? (
    <div className='HitCount'>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <span>
      Nothing found.. Keep searching!
      <span role='img' aria-label='Not found - search again'>
        🕵🏻‍♂️
      </span>
    </span>
  );
});

const StyledHit = styled.div`
  padding: 3rem;
  border-bottom: 1px solid ${({ theme: { color } }) => color.content};

  :hover {
    background: ${({ theme: { color } }) => color.secondary};
  }
`;

const ArticleHit = ({ hit }) => (
  <StyledHit>
    <Link to={`/blog/${hit.slug}`}>
      <h4>
        <Highlight attribute='frontmatter.title' hit={hit} tagName='mark' />
      </h4>
      <p>
        <Highlight attribute='frontmatter.description' hit={hit} tagName='mark' />
      </p>
      <p>
        <Highlight attribute='frontmatter.date' hit={hit} tagName='mark' />
      </p>
    </Link>
  </StyledHit>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className='Hits' hitComponent={ArticleHit} />
  </Index>
);

const StyledResult = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme: { color } }) => color.contentFaded};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { base } }) => base.accent.secondary};
  }

  mark {
    color: ${({ theme: { color } }) => color.bg} !important;
    background: ${({ theme: { base } }) => base.accent.secondary};
  }

  * {
    color: ${({ theme: { color } }) => color.header} !important;
    margin: 0;
  }
`;

const SearchResult = ({ indices, className }) => {
  return (
    <StyledResult className={className}>
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy />
    </StyledResult>
  );
};

SearchResult.defaultProps = {
  className: '',
};

SearchResult.propTypes = {
  indices: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default SearchResult;
