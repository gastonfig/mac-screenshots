import React from 'react';
// import PropTypes from 'prop-types';
import './InputRadio.css';

const RadioOption = ({ defaultChecked, onChange, title, value }) => {
  return (
    <label className="input-radio">
      <input
        defaultChecked={defaultChecked}
        className="radio"
        name="radio"
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span className="input-radio-title">{title}</span>
    </label>
  );
};

export default RadioOption;
