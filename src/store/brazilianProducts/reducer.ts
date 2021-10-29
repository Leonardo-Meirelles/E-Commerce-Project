interface ActionProps {
    type: string
    data: []
};

interface InitialState {
    products: Products[]
};

type Products = {
    nome: string,
    descricao: string,
    categoria: string,
    imagem: string,
    preco: string,
    material: string,
    departamento: string,
    id: string
};

const INITIAL_STATE: InitialState = {
    products: []
};

const reducer = (state = INITIAL_STATE, action:ActionProps) => {

    switch (action.type) {
        case 'GET_PRODUCTS_BRAZILIAN':
            return {...state, products: action.data}
    
        default:
            return state;
    }
};

export default reducer