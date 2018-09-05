import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const Checkboxes = props => (
    <Checkbox style={{marginBottom: 10}} onChange={(e) => props.onChange(e, props.index)}>{props.label}</Checkbox>
);

Checkboxes.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
export default Checkboxes;
