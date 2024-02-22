import React, { PropTypes } from 'react';
import Input from '../Input';

import './Form.css';

const Form = ({ loading, address, handleSubmit, handleInputChange }) => (
    <form
        action="#"
        className="form"
        noValidate
        onSubmit={handleSubmit(address)}
    >
        <div className="form__field">
            <Input
                name="address"
                disabled={loading}
                onBlur={handleSubmit(address)}
                onChange={handleInputChange}
            />
        </div>
    </form>
);

export default Form;