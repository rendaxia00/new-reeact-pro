const initialState = {
    finished: false
};

export const FINISH_SALES = 'FINISH_SALES';

export const finishSales = () => (
    {
        type: FINISH_SALES,
        payload: {
            finished: true
        }
    }
);

export default (state = initialState, action) => {
    switch (action.type) {
        case FINISH_SALES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};