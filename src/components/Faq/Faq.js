import React from 'react';
import Title from '../Title';
import Questions from '../Questions';
import faq from '../../data/faq';

import './Faq.css';

const Faq = () => {
    return (
        <div className="faq">
            <div className="faq__title">
                <Title>Presale FAQ:</Title>
            </div>
            <div className="faq__list">
                <Questions list={faq} />
            </div>
        </div>
    );
};

export default Faq;