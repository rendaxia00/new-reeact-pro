import React, { PropTypes } from 'react';
import cx from 'classnames';

import './Warning.css';

const renderText = (item, num, items) => {
    const isLast = ++num === items.length;
    return (
        <p
            key={num}
            className={cx("warning__text", { warning__text_indent: isLast })}
            dangerouslySetInnerHTML={{ __html: item }}
        />
    )
};

const Warning = ({ title, text }) => (
    <div className="warning">
        <div className="warning__top">
            <h4
                className="warning__title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {
                text && text.length &&
                text.map(renderText)
            }
        </div>
    </div>
);

Warning.propTypes = {
    title: PropTypes.string,
    text: PropTypes.array
};

export default Warning;