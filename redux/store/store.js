import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(
                applyMiddleware(thunk)
        )
);

export default store;