import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import categoryItems from './categoryReducer'
import getProducts from './productReducer';
import cartItems from './cartReducer';
import searchItem from './searchReducer';
import paginationItem from './paginationReducer';
import getOrders from './orderReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    categories:categoryItems,
    products:getProducts,
    list:cartItems,
    search:searchItem,
    currentPage:paginationItem,
    orders:getOrders,
    form: formReducer
});