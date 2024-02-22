import { transactionsRequest } from '../utils/requests';
import parseTransactions from '../utils/parseTransactions';
import tokens from '../data/tokens';

const initialState = {
    address: null,
    list: null,
    loading: false,
    loaded: false,
    error: ''
};

export const SET_TRANSACTIONS_ADDRESS = 'SET_TRANSACTIONS_ADDRESS';
export const TRANSACTIONS_PENDING = 'TRANSACTIONS_PENDING';
export const TRANSACTIONS_FULLFILLED = 'TRANSACTIONS_FULLFILLED';
export const TRANSACTIONS_REJECTED = 'TRANSACTIONS_REJECTED';

export const setTransactionsValue = address => ({
    type: SET_TRANSACTIONS_ADDRESS,
    payload: {
        address
    }
});
export const getTransactionsRequest = () => ({ type: TRANSACTIONS_PENDING });
export const transactionsFullfilled = list => ({
    type: TRANSACTIONS_FULLFILLED,
    payload: {
        list
    }
});
export const transactionsRejected = (error = 'Error. Please, try again later.') => ({ type: TRANSACTIONS_REJECTED, payload: { error } });

export const getTransactions = address => dispatch => {
    dispatch(getTransactionsRequest());

    transactionsRequest(address).then(
        res => {
            const { result } = res.data;
            const { course } = tokens;
            if (result) {
                if (result.length === 0) {
                    dispatch(transactionsRejected('No transactions found'));
                } else {
                    const filteredTransactions = result.filter(item => {
                        const { from, value } = item;
                        return from === address && Number(value) > 0;
                    });
                    if (filteredTransactions.length) {
                        dispatch(transactionsFullfilled(parseTransactions(filteredTransactions, course)));
                    } else {
                        dispatch(transactionsRejected('No transactions found'));
                    }
                }
            } else {
                dispatch(transactionsRejected());
            }
        }
    ).catch(() => dispatch(transactionsRejected()));

};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_TRANSACTIONS_ADDRESS:
            return {
                ...state,
                ...payload
            };
        case TRANSACTIONS_PENDING:
            return {
                ...state,
                loaded: false,
                loading: true,
                error: ''
            };
        case TRANSACTIONS_FULLFILLED:
            return {
                ...state,
                loading: false,
                loaded: true,
                ...payload
            };
        case TRANSACTIONS_REJECTED:
            return {
                ...state,
                loading: false,
                ...payload
            };
        default:
            return state
    }
};