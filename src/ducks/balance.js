import { balanceRequest } from '../utils/requests';

const initialState = {
    balance: '0',
    loading: false,
    loaded: false,
    error: false
};

export const BALANCE_PENDING = 'BALANCE_PENDING';
export const BALANCE_FULLFILLED = 'BALANCE_FULLFILLED';
export const BALANCE_REJECTED = 'BALANCE_REJECTED';

export const getBalanceRequest = () => ({ type: BALANCE_PENDING });
export const balanceFullfilled = balance => ({
    type: BALANCE_FULLFILLED,
    payload: {
        balance
    }
});
export const balanceRejected = () => ({ type: BALANCE_REJECTED });

export const getBalance = address => dispatch => {
    dispatch(getBalanceRequest());
    balanceRequest(address).then(
        res => {
            const { data: { result }, status } = res;
            if (status === 200 && result && result.length) {
                dispatch(balanceFullfilled(result))
            } else {
                dispatch(balanceRejected());
            }
        }
    ).catch(() => dispatch(balanceRejected()));
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BALANCE_PENDING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case BALANCE_FULLFILLED:
            return {
                ...state,
                loading: false,
                loaded: true,
                ...payload
            };
        case BALANCE_REJECTED:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true
            };
        default:
            return state
    }
};