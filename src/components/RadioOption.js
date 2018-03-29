import React from 'react';
import PropTypes from 'prop-types';
import './RadioOption.css';

const RadioOption = ({ defaultChecked, onChange, title, value }) => {
  return (
    <label className="input-radio">
      <input
        defaultChecked={defaultChecked}
        className="input-radio__radio"
        name="radio"
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span className="input-radio__title">{title}</span>
    </label>
  );
};

RadioOption.propTypes = {
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioOption;
