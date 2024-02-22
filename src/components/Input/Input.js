import React, { PropTypes } from 'react';

import './Input.css';

const Input = ({ name, type, disabled, onChange, onBlur }) => (
    <div className="input">
        <input
            type={type}
            name={name}
            disabled={disabled || null}
            onChange={onChange}
            onBlur={onBlur}
            className="input__field"
        />
    </div>
);

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

Input.defaultProps = {
    type: 'text'
};

export default Input;