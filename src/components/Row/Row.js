import React, { PropTypes } from 'react';
import cx from 'classnames';

import './Row.css';

const Row = ({ date, eth, snm, confirmed }) => {
    const status = confirmed ? 'Confirmed' : 'Unconfirmed';
    return (
        <tr className="row">
            <td className={cx('row__cell')}>{date}</td>
            <td className={cx('row__cell')}>{eth} ETH</td>
            <td className={cx('row__cell')}>{snm} SNM</td>
            <td className={cx('row__cell', {
                row__cell_accept: confirmed,
                row__cell_decline: !confirmed
            })}>{status}</td>
        </tr>
    )
};

Row.propTypes = {
    date: PropTypes.string,
    eth: PropTypes.string,
    snm: PropTypes.string,
    confirmed: PropTypes.bool
};

export default Row;