import React, { PropTypes } from 'react';

import './Checkbox.css';

const Checkbox = ({ id, name, label, value, handleChange }) => {
    return (
        <div className="checkbox">
            <input
                id={id}
                name={name}
                onChange={handleChange}
                value={value}
                type="checkbox"
                className="checkbox__native"
            />
            <label
                htmlFor={id}
                className="checkbox__label"
            >
                {label}
            </label>
        </div>
    )
};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func
};

export default Checkbox;