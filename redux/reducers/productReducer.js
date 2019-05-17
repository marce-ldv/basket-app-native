import { SET_PRODUCTS} from '../actions/type';

const initialState = {
    products:[]
}

export const getProducts = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS: {
            return Object.assign({},state, {products: action.payload}) ;
        }
        
        default: return {...state};
    }
}

export default getProducts; 