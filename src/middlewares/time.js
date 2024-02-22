import { TIME_FULLFILLED } from '../ducks/time';
import { finishSales } from '../ducks/sales';
import moment from 'moment-timezone';
import deadline from '../data/deadline';

export default store => next => action => {
    const { type } = action;
    const { dispatch } = store;
    if (type === TIME_FULLFILLED) {
        const { payload: { time } } = action;
        const { end, timeZone, format } = deadline;
        const parsedTime = moment.tz(time, format, timeZone);
        const parsedEnd = moment.tz(end, format, timeZone);

        if (parsedEnd.isBefore(parsedTime)) {
            dispatch(finishSales());
        }
    }
    return next(action);
};