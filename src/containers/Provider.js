import React from 'react';
import { JobContext, SearchContext, FilterContext } from '../contexts';

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

const FilterProvider = props => (
  <FilterContext.Provider value={props.value}>
    {props.children}
  </FilterContext.Provider>
);

export {
  JobProvider,
  SearchProvider,
  FilterProvider
}