import React, { PropTypes } from 'react';
import { v4 } from 'node-uuid';
import Row from '../Row';

import './Table.css';

const renderHeadItem = item => (
    <th
        className="table__head"
        key={v4()}
    >
        <div className="table__cell">{item}</div>
    </th>
);

const renderRow = (item) => <Row key={v4()} {...item} />;

const Table = ({ head, list }) => {
    return (
        <table className="table">
            <tbody>
                <tr className="table__row">
                    {
                        head.map(renderHeadItem)
                    }
                </tr>
                {
                    list.map(renderRow)
                }
            </tbody>
        </table>
    )
};

Table.propTypes = {
    head: PropTypes.array,
    list: PropTypes.array
};

export default Table;
