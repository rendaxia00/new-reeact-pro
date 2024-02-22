import React, { PropTypes } from 'react';
import Step from '../Step';
import { v4 } from 'node-uuid';

import './Steps.css';

const renderStep = (step, num) => (
    <li
        className="steps__item"
        key={v4()}
    >
        <Step
            {...step}
            num={++num}
        />
    </li>
);

const Steps = ({ list }) => {
    return (
        <ul className="steps">
            {
                list.map(renderStep)
            }
        </ul>
    )
};

Steps.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
};

export default Steps; 