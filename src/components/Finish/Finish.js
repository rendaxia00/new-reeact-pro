import React, { PropTypes } from 'react';

import './Finish.css';

const Finish = ({ children }) => (
    <div className="finish">
        <p className="finish__text">
            {children}
        </p>
    </div>
);

Finish.propTypes = {
    children: PropTypes.string
};

export default Finish;