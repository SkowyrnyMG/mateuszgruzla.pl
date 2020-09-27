import algoliasearch from 'algoliasearch/lite';
import React, { useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { ThemeProvider } from 'styled-components';
import StyledSearchResult from 'components/organisms/algolia-search/search-results/search-results';
import StyledSearchBox from 'components/organisms/algolia-search/search-box/search-box';

const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};
export default function Search({ indices }) {
  const [inputQuery, setInputQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch('AWZUGS7444', 'cf9d47a303806baf3fb8a9cff6c604c8');

  return (
    <ThemeProvider theme={theme}>
      <InstantSearch searchClient={searchClient} indexName={indices[0].name} onSearchStateChange={({ query }) => setInputQuery(query)}>
        <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        {inputQuery !== undefined && inputQuery !== '' && <StyledSearchResult show={inputQuery && inputQuery.length > 0 && hasFocus} indices={indices} />}
      </InstantSearch>
    </ThemeProvider>
  );
}
