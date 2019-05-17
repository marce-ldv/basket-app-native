import { SET_CATEGORIAS, SET_CATEGORIA_SELECCIONADA} from '../actions/type';
const initialState = {
    categories: [],
    category: "MLA1000"
   
 }
 export const categoryItems = (state = initialState, action ) => {

    switch(action.type){
        case SET_CATEGORIAS: {
            return { ...state, categories: action.payload };
        }
        case SET_CATEGORIA_SELECCIONADA:{
         
            return { ...state, category:action.payload } ; 
        }
        default: return {...state};
    }
 }
 export default categoryItems;