
const INITIAL_STATE = {
    productNames: []
};

const reducer = (state = INITIAL_STATE, action:any) => {

    switch (action.type) {
        case 'SAVE_NAMES':
            return {...state, productNames: action.data};
    
        default:
            return state;
    };
};

export default reducer