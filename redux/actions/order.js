import { CLEAR_CART,SET_ORDERS } from './type';
import axios from 'axios';
import { getToken,getProfile } from './user';
export const requestOrder = (cart) => async dispatch => {
    
    let array = cart.map (item => { 
        return {count:item.count, id:item.id}
    })
    let token = await getToken();

    let config = {
        headers: {'Authorization': 'Bearer ' + token}
    };
    
    
    return axios.post('http://192.168.11.85:3000/order/create_order',{cart:array},config).then(result=>{
       
        dispatch({
            type:CLEAR_CART
        })
    }).catch(err => {
        console.log(err);   
    })

}

export const getAllOrders =  () => async dispatch => {
    
    let token = await getToken();
    let config = {
        headers: {'Authorization': 'Bearer ' + token}
    };
    
    
    return  axios.get('http://192.168.11.85:3000/order/all',config).then(result=>{
        

        dispatch({
            type:SET_ORDERS,
            payload:result.data.data
        })
        
    }).catch(err => {
        console.log(err);   
    })

}