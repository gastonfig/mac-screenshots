import React from 'react';
// import PropTypes from 'prop-types';
import './RadioGroup.css';

import RadioOption from './RadioOption';

const RadioGroup = ({ onChange, options }) => {
  return (
    <div className="row radio-group--container">
      {options.map((option, key) => (
        <RadioOption
          defaultChecked={option.defaultChecked}
          key={key}
          onChange={onChange}
          title={option.title}
          value={option.value}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
