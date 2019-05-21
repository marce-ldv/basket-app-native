import { ADD_CART,DELETE_CART,CLEAR_CART } from './type';


export const addCart = ( product ) => dispatch => {
    dispatch({
		type: ADD_CART,
		payload:product
	})
	
}

export const deleteCart = ( product ) => dispatch => {
    dispatch({
		type: DELETE_CART,
		payload:product
	})
}

export const clearCart = () => dispatch => {
    dispatch({
        type:CLEAR_CART
    })
}