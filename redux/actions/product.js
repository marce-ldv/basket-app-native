import { SET_PRODUCTS } from './type';
import { getToken } from './user';
import axios from 'axios'; 

export const getProducts = ( category_id ) => dispatch => {

    let config = {
        headers: {'Authorization': 'Bearer ' + getToken()}
    };
    return axios.get('http://localhost:3000/product/search_by_cat/'+category_id,config).then(result=>{
        
        dispatch(setProducts(result.data.data)); 
    }).catch(err => {
        dispatch(setProducts([]));    
    })

}

const setProducts = (result) => { 
    return {
        type:SET_PRODUCTS,
        payload:result
    }
}

export const searchProduct = ( product ) => dispatch => { 
    let config = {
        headers: {'Authorization': 'Bearer ' + getToken()}
    };
    return axios.get('http://localhost:3000/product/search/'+product.target.value,config).then(result=>{
        dispatch(setProducts(result.data.data)); 
    }).catch(err => {
        dispatch(setProducts([]));    
    })

}