import React, {PropTypes} from 'react';
import cx from 'classnames';

import './Title.css';

const Title = ({ size, children }) => {
    const Tag = size === 'big' ? 'h1' : 'h3';
    return (
        <Tag className={cx('title', {'title_big': size === 'big'})}>
            {children}
        </Tag>
    )
};

Title.defaultProps = {
    size: 'normal'
};

Title.propTypes = {
    size: PropTypes.string,
    children: PropTypes.string
};

export default Title;