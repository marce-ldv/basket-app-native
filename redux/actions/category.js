import axios from 'axios'; 
import { getToken } from './user';
import { SET_CATEGORIAS, SET_CATEGORIA_SELECCIONADA} from './type';

export const getCategories = () => dispatch  => {

    let config = {
        headers: {'Authorization': 'Bearer ' + getToken()}
    };

 return axios.get('192.168.11.85/category/all',config).then(result=>{
       console.log(result);
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