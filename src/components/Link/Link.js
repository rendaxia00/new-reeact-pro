import React, { PropTypes } from 'react';

import './Link.css';

const Link = ({ url, text }) => {
    return (
        <a
            href={url}
            className="link"
        >
            {text}
        </a>
    )
};

Link.defaultProps = {
    url: '/'
};

Link.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string
};

export default Link;