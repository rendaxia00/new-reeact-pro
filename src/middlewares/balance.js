import { BALANCE_FULLFILLED } from '../ducks/balance';
import { finishSales } from '../ducks/sales';
import parseBalance from '../utils/parseBalance';
import tokens from '../data/tokens';

export default store => next => action => {
    const { type } = action;
    const { dispatch } = store;
    if (type === BALANCE_FULLFILLED) {
        const { payload: { balance } } = action;
        const { max } = tokens;
        if (Number(parseBalance(balance)) >= Number(max)) {
            dispatch(finishSales());
        }
    }
    return next(action);
};