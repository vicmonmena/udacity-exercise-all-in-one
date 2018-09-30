import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.handleClick} disabled={props.handleDisabled}>
	{props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  handleDisabled: PropTypes.bool
}

export default Button;