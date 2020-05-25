import { createStore, combineReducers } from 'redux'
import cartItems from '../reducers/cartItems'
import allReducers from '../reducers/index';


export default store = createStore(allReducers)