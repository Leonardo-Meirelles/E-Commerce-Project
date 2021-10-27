interface ActionProps {
    type: string
    data: []
};

interface InitialState {
    products: Products[]
};

type Products = {
    hasDiscount: boolean,
    name: string,
    gallery: string[],
    description: string,
    price: string,
    discountValue: string,
    details: {
        adjective: string,
        material: string,
    },
    id: string,
}

const INITIAL_STATE: InitialState = {
    products: []
};

const reducer = (state = INITIAL_STATE, action:ActionProps) => {

    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.data}
    
        default:
            return state;
    }
};

export default reducer