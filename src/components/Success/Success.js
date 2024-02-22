import React, { PropTypes } from 'react';
import { v4 } from 'node-uuid';

import './Success.css';

const Success = ({ links }) => (
    <div className="success">
        <h4 className="success__title">Congratulations! You are the SONM early adopter and SNM tokens holder. </h4>
        <p className="success__text">Thank you for your support and your faith in the SONM project.</p>
        <p className="success__text success__text_indent">You can check your preICO tokens balance in the preICO smart contract info using any Ethereum blockchain explorer</p>
        <div className="success__links">
            {
                links.map(item => <a href={item.url} target="_blank" className="success__link" key={v4()}>{item.text}</a>)
            }
        </div>
    </div>
);

Success.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object)
};

export default Success;