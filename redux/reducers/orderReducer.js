import { SET_ORDERS,CLEAR} from '../actions/type';

const initialState = {
    order:[]
}

export const getOrders = (state = initialState, action) => {
    switch(action.type){
        case SET_ORDERS: {
            return {...state,order:action.payload} ;
        }
        case CLEAR:{
            return {...state,order:[]}
        }
        default: return {...state};
    }
}

export default getOrders; 