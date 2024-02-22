import React, { PureComponent, PropTypes } from 'react';
import { v4 } from 'node-uuid';
import Question from '../Question';

import './Questions.css';

export default class Questions extends PureComponent {
    static propTypes = {
        list: PropTypes.array
    };

    state = {
        openedId: null
    };

    handleItemClick = id => {
        const {openedId} = this.state;
        this.setState({ openedId: id === openedId ? null : id })
    };

    renderItem = (item, id) => {
        const { text, popup } = item;
        const { openedId } = this.state;
        return (
            <li
                className="questions__item"
                key={v4()}
            >
                <Question
                    text={text}
                    popup={popup}
                    id={id}
                    openedId={openedId}
                    onItemClick={this.handleItemClick}
                />
            </li>
        )
    };

    render() {
        const { list } = this.props;
        return (
            <ul className="questions">
                {
                    list.map(this.renderItem)
                }
            </ul>
        );
    }
}