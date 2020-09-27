import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { connectStateResults, Highlight, Hits, Index, Snippet, PoweredBy } from 'react-instantsearch-dom';

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

const ArticleHit = ({ hit }) => (
  <div>
    <Link to={`blog/${hit.slug}`}>
      <h4>
        <Highlight attribute='frontmatter.title' hit={hit} tagName='mark' />
      </h4>
    </Link>
    <Snippet attribute='excerpt' hit={hit} tagName='mark' />
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className='Hits' hitComponent={ArticleHit} />
  </Index>
);

const StyledResult = styled.div`
  mark {
    color: ${({ theme: { color } }) => color.bg} !important;
    background: ${({ theme: { base } }) => base.accent.secondary};
  }

  * {
    color: ${({ theme: { color } }) => color.header} !important;
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

export default SearchResult;
