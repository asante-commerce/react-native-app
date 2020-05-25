import cartItems from './cartItems';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cartItems: cartItems
})


export default allReducers;