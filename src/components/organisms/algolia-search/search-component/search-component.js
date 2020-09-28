import algoliasearch from 'algoliasearch/lite';
import React, { useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import StyledSearchResult from 'components/organisms/algolia-search/search-results/search-results';
import StyledSearchBox from 'components/organisms/algolia-search/search-box/search-box';

export default function Search({ indices }) {
  const [inputQuery, setInputQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);

  return (
    <InstantSearch searchClient={searchClient} indexName={indices[0].name} onSearchStateChange={({ query }) => setInputQuery(query)}>
      <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
      {inputQuery !== undefined && inputQuery !== '' && <StyledSearchResult show={inputQuery && inputQuery.length > 0 && hasFocus} indices={indices} />}
    </InstantSearch>
  );
}
