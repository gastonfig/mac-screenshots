import React from 'react';
import PropTypes from 'prop-types';
import './Directory.css';

const Directory = ({ directory, onClick }) => (
  <div className="row directory">
    <span className="directory--text">{directory}</span>
    <button className="directory--button" onClick={onClick}>
      Change
    </button>
  </div>
);

Directory.propTypes = {
  directory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Directory;
