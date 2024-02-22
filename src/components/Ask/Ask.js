import React from 'react';
import Title from '../Title';
import Socials from '../Socials';

import socialsList from '../../data/socials';
import './Ask.css';

const Ask = () => {
    return (
        <div className="ask">
            <div className="ask__title">
                <Title>Any questions on the SONM presale?</Title>
            </div>
            <p className="ask__text">Don't hesitate to ask us:</p>
            <div className="ask__socials">
                <Socials list={socialsList}/>
            </div>
        </div>
    )
};

export default Ask;