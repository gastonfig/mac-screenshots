import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

const Toggle = ({
  onChange,
  title,
  value
}) => (
  <label className="row input-label">
    <input className="toggle" onChange={onChange} type="checkbox" value={value} />
    <span>{title}</span>
  </label>
);

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Toggle;
