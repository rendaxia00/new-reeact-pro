import { connect } from 'react-redux';
import { acceptTerms } from '../../ducks/terms';
import { getBalance } from '../../ducks/balance';


import Main from '../../components/Main';

const mapStateToProps = state => {
    const { accepted: termsAccepted } = state.terms;
    const { finished: salesFinished } = state.sales;
    const { balance, loaded: balanceLoaded } = state.balance;
    const { loading: timeLoading } = state.time;

    return { salesFinished, termsAccepted, balanceLoaded, balance, timeLoading };
};

const mapDispatchToProps = {
    acceptTerms,
    getBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

