import React, {PropTypes} from 'react';

import './Wrapper.css';

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
};

Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;