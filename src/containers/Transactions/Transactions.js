import { connect } from 'react-redux';
import Transactions from '../../components/Transactions';
import { setTransactionsValue, getTransactions } from '../../ducks/transactions';

const mapStateToProps = state => {
    const { address, loading, loaded, error, list } = state.transactions;

    return {
        address,
        loading,
        loaded,
        error,
        list
    };
};
const mapDispatchToProps = dispatch => ({
    handleAddressChange(e) {
        const address = e.target.value.trim();
        dispatch(setTransactionsValue(address))
    },
    handleFormSubmit: address => e => {
        e.preventDefault();
        if (address && address.length) {
            const formattedAddress = String(address).toLowerCase();
            dispatch(getTransactions(formattedAddress));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);