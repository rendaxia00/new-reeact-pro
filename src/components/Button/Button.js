import React, { PropTypes } from 'react';

import './Button.css';

const Button = ({ type, handleClick, text, disabled }) => {
    return (
        <button
            type={type}
            onClick={handleClick}
            className="button"
            disabled={disabled || null}
        >
            <span className="button__text">{text}</span>
        </button>
    )
};

Button.propTypes = {
    type: PropTypes.string,
    handleClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;