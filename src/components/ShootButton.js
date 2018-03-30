import React from 'react';
import PropTypes from 'prop-types';
import './ShootButton.css';

const ShootButton = ({ label, onClick }) => (
  <button className="shootButton" onClick={onClick}>
    <span className="shootButton--label">{label}</span>
  </button>
);

ShootButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShootButton;
