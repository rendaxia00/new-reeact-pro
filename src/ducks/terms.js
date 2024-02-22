const initialState = {
    accepted: false
};

export const ACCEPT_TERMS = 'ACCEPT_TERMS';

export const acceptTerms = () => (
    {
        type: ACCEPT_TERMS
    }
);

export default (state = initialState, action) => {
    switch (action.type) {
        case ACCEPT_TERMS:
            return {
                ...state,
                accepted: true
            };
        default:
            return state
    }
};