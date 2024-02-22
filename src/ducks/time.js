import { timeRequest } from '../utils/requests';

const initialState = {
    time: '',
    loading: false,
    loaded: false,
    error: false
};

export const TIME_PENDING = 'TIME_PENDING';
export const TIME_FULLFILLED = 'TIME_FULLFILLED';
export const TIME_REJECTED = 'TIME_REJECTED';

export const getTimeRequest = () => ({ type: TIME_PENDING });
export const timeFullfilled = time => ({
    type: TIME_FULLFILLED,
    payload: {
        time
    }
});
export const timeRejected = () => ({ type: TIME_REJECTED });

export const getTime = timeZone => dispatch => {
    dispatch(getTimeRequest());
    timeRequest(timeZone).then(
        res => {
            const { data: { formatted }, status } = res;
            if (status === 200 && formatted && formatted.length) {
                dispatch(timeFullfilled(formatted));
            } else {
                dispatch(timeRejected());
            }
        }
    ).catch(() => dispatch(timeRejected()));
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TIME_PENDING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case TIME_FULLFILLED:
            return {
                ...state,
                loading: false,
                loaded: true,
                ...payload
            };
        case TIME_REJECTED:
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