import React, { PropTypes } from 'react';

import './Step.css';

const Step = ({ num, title, component }) => (
    <div className="step">
        <h4 className="step__title">
            <span>{num}</span>
            . &nbsp;
            <span dangerouslySetInnerHTML={{ __html: title }} />
        </h4>
        {component &&
            <div className="steps_content">
                {component}
            </div>
        }
    </div>
);

Step.propTypes = {
    num: PropTypes.number,
    title: PropTypes.string,
    component: PropTypes.node
};

export default Step; 