import React, { Component } from 'react';
import TokensUI from '../../components/Tokens';
import { connect } from 'react-redux';
import { getBalance } from '../../ducks/balance';
import parseBalance from '../../utils/parseBalance';

import address from '../../data/address';
import tokens from '../../data/tokens';


const mapStateToProps = state => {
    const { balance, loaded: balanceLoaded } = state.balance;
    const parsedBalance = parseBalance(balance);
    return {
        balance: parsedBalance,
        balanceLoaded,
        finished: state.sales.finished
    }
};


class Tokens extends Component {
    state = {
        timer: 0
    };

    componentDidMount() {
        const { getBalance, finished } = this.props;
        if (!finished) {
            getBalance(address);
            const timer = setInterval(() => getBalance(address), 20000);
            this.setState({ timer });
        }
    }

    componentWillUnmount() {
        const { timer } = this.state;
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        const { balance, loaded } = this.props;
        return (
            <TokensUI
                {...tokens}
                balance={balance}
            />
        )
    }
}

export default connect(mapStateToProps, { getBalance })(Tokens);