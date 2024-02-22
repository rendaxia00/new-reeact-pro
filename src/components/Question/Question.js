import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import './Question.css';

export default class Question extends Component {
    static propTypes = {
        text: PropTypes.string,
        popup: PropTypes.string,
        id: PropTypes.number,
        openedId: PropTypes.number,
        onItemClick: PropTypes.func
    };

    render() {
        const { text, popup, id, openedId, onItemClick } = this.props;
        const opened = id === openedId;
        return (
            <div className={cx('question', { question_opened: opened })}>
                <div
                    className="question__toggle"
                    onClick={() => onItemClick(id)}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                {
                    opened &&
                    <div
                        className="question__popup"
                        dangerouslySetInnerHTML={{ __html: popup }}
                    />
                }
            </div>
        );
    }
}