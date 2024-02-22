import React, { PropTypes } from 'react';
import Title from '../Title';
import address from '../../data/address';

import './Address.css';

const Address = (props) => {
    const { text, title, termsAccepted, onBtnClick } = props;
    const btnText = termsAccepted ? address : text;
    return (
        <div className="address">
            <div className="address__title">
                <Title>{title}</Title>
            </div>
            {
                termsAccepted ?
                    <span
                        className="address__text"
                    >
                        {btnText}
                    </span>
                    :
                    <button
                        className="address__btn address__btn_pointer"
                        onClick={onBtnClick}
                        disabled={termsAccepted}
                    >
                        {btnText}
                    </button>
            }
        </div>
    )
};

Address.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    termsAccepted: PropTypes.bool,
    onBtnClick: PropTypes.func
};

export default Address;