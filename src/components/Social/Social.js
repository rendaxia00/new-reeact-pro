import React, { PropTypes } from 'react';

import './Social.css';

const Social = ({ icon, text, url }) => {
    const logo = require(`../../resources/images/${icon}`);
    return (
        <a
            href={url}
            className="social"
            target="_blank"
        >
            <img
                className="social__icon"
                src={logo}
                alt={text}
            />
            <p className="social__text">{text}</p>
        </a>
    )
};

Social.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string
};

export default Social;