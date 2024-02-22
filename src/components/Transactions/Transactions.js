import React, { PropTypes } from 'react';
import Form from '../Form';
import Spin from '../Spin';
import Table from '../Table';
import Success from '../Success';

import './Transactions.css';

const tableHead = ['Date', 'Ethereum amount', 'SONM tokens amount', 'Transaction status'];
const links = [{
    url: 'https://etherscan.io/address/0xc8e3aa7718cf72f927b845d834be0b93c66b34e1#readContract',
    text: 'etherscan.io'
},
{
    url: 'http://etherchain.org',
    text: 'etherchain.org'
},
{
    url: 'http://ethereumblocks.info',
    text: 'ethereumblocks.info'
}];

const Transactions = ({ handleFormSubmit, handleAddressChange, address, loading, loaded, error, list }) => {
    return (
        <div className="transactions">
            <p className="transactions__title">Enter your Ethereum address used for the deposit to check your SONM preICO SPT tokens balance:</p>
            <div className="transactions__form">
                <Form
                    handleSubmit={handleFormSubmit}
                    handleInputChange={handleAddressChange}
                    address={address}
                    loading={loading}
                />
            </div>
            {
                loading &&
                <div className="transactions__spin">
                    <Spin />
                </div>
            }
            {
                error &&
                <div className="transactions__error">{error}</div>
            }
            {
                loaded && list && list.length &&
                <div className="transactions__table">
                    <p className="transactions__text">Transactions from your ETH address:</p>
                    <Table
                        head={tableHead}
                        list={list}
                    />
                    <div className="transactions__success">
                        <Success links={links} />
                    </div>
                </div>
            }
        </div>
    )
};

Transactions.propTypes = {
    handleFormSubmit: PropTypes.func,
    handleAddressChange: PropTypes.func,
    address: PropTypes.string,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.string,
    list: PropTypes.array
};

export default Transactions;