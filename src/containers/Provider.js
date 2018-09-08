import React from 'react';
import { JobContext, SearchContext } from '../contexts';

const JobProvider = props => (
  <JobContext.Provider value={props.value}>
    {props.children}
  </JobContext.Provider>
);

const SearchProvider = props => (
  <SearchContext.Provider value={props.value}>
    {props.children}
  </SearchContext.Provider>
);

export {
  JobProvider,
  SearchProvider
}