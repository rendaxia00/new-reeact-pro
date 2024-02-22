import React, { PureComponent, PropTypes } from 'react';
import Spin from '../../components/Spin';

import { v4 } from 'node-uuid';

import './Timer.css';


export default class Timer extends PureComponent {
    static propTypes = {
        days: PropTypes.number,
        hours: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        units: PropTypes.array,
        loading: PropTypes.bool,
        error: PropTypes.bool
    };

    renderItem = (unit) => {
        return (
            <li
                className="timer__item"
                key={v4()}
            >
                <div className="timer__circle">{this.props[unit]}</div>
                <p className="timer__word">{unit}</p>
            </li>
        )
    };

    render() {
        const { units, loading, error } = this.props;
        return (
            <div className="timer">
                <h4 className="timer__title">Time left:</h4>
                {
                    loading ?
                        <Spin />
                        :
                        <ul className="timer__list">
                            {
                                units.map(this.renderItem)
                            }
                        </ul>
                }
                {
                    error &&
                    <p className="timer__error">Error occured. Please, reload page</p>
                }
            </div>
        )
    }
}