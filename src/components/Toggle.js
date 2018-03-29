import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

const Toggle = ({ onChange, title, value }) => (
  <label className="input-label">
    <input
      className="toggle"
      onChange={onChange}
      type="checkbox"
      value={value}
    />
    <span className="input-title">{title}</span>
  </label>
);

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Toggle;
