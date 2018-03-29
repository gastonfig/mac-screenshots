import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ onChange, title, value }) => (
  <label className="input-label input-tabs">
    <span>
      <input
        className="tabs"
        onChange={onChange}
        type="checkbox"
        value={value}
      />
    </span>
    <span className="input-title">{title}</span>
  </label>
);

Tabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tabs;
