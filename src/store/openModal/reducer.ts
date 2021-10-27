interface ActionProps {
    type: string;
    data: boolean;
};

interface InitialState {
    open: boolean;
};

const INITIAL_STATE: InitialState = {
    open: false
};

const reducer = (state = INITIAL_STATE, action:ActionProps) => {

    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {open: action.data};
    
        default:
            return state;
    };
};

export default reducer