import axios from 'axios'; 
import { getToken } from './user';
import { SET_CATEGORIAS, SET_CATEGORIA_SELECCIONADA} from './type';

export const getCategories = () => async dispatch  => {
    let token = await getToken();
    console.log(token)
    let config = {
        headers: {'Authorization': 'Bearer '+ token}
    };
 
 return axios.get('http://192.168.11.85:3000/category/all',config).then(result=>{
       
        dispatch(setCategories(result)); 
    }).catch(err => {
        dispatch(setCategories([]));    
    })

}

const setCategories = (categorias) =>{
    
    return {
        type:SET_CATEGORIAS, 
        payload:categorias.data.data
    }
}
export const selectCategoria = (id) => dispatch =>{
   
    dispatch(setCategoria(id));

}

export const setCategoria = (id) => {

       return {
            type:SET_CATEGORIA_SELECCIONADA, 
            payload:id
        }
    
}