import React from 'react';
import PropTypes from 'prop-types';

const FilterHeader = props => (
  <div style={{marginBottom: 40}}>
    <span className="left-heading">{props.name}</span>
    <button className="right-heading">Clear</button>
  </div>
);

FilterHeader.propTypes = {
  name: PropTypes.string.isRequired
}

export default FilterHeader;
