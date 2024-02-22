import React, { PropTypes } from 'react';

import './Tokens.css';

const Tokens = ({ balance, max, course }) => (
    <div className="tokens">
        <div className="tokens__top">
            <h4 className="tokens__title">PreICO SPT tokens left:</h4>
            <div className="tokens__wrapper">
                <div className="tokens__count">
                    <div className="tokens__num">{balance}</div>
                    <p className="tokens__descr">SPT sold</p>
                </div>
                <span className="tokens__divider">of</span>
                <div className="tokens__count">
                    <div className="tokens__num">{max}</div>
                    <p className="tokens__descr">SPT max</p>
                </div>
            </div>
        </div>
        <p className="tokens__course">PreICO SPT tokens price: 1 ETH = {course} SPT</p>
    </div>
);

Tokens.propTypes = {
    balance: PropTypes.string,
    max: PropTypes.string,
    course: PropTypes.number
};

export default Tokens;