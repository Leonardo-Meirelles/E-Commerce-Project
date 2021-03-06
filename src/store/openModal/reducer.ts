interface ActionProps {
    type: string;
    data: any;
};

interface InitialState {
    open: boolean;
    cart: {}[]
};

const INITIAL_STATE: InitialState = {
    open: false,
    cart: []
};

const reducer = (state = INITIAL_STATE, action: ActionProps) => {

    switch (action.type) {
        case 'TOGGLE_MODAL':
            return { ...state, open: action.data };

        case 'SET_ASSETS':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.data
                ]
            };
        case 'DELETE_ASSETS':
            return {
                ...state,
                cart: [
                    ...action.data
                ]
            }

        default:
            return state;
    };
};

export default reducer