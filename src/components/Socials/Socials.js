import React, { PropTypes } from 'react';
import Social from '../Social';
import { v4 } from 'node-uuid';

import './Socials.css';

const renderItem = (props) => {
    return (
        <li
            className="socials__item"
            key={v4()}
        >
            <Social {...props} />
        </li>
    )
};

const Socials = ({ list }) => {
    return (
        <ul className="socials">
            {
                list.map(renderItem)
            }
        </ul>
    )
};

Socials.propTypes = {
    list: PropTypes.array
};

export default Socials;