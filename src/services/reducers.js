
import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import productReducer from './product/reducer';
import totalReducer from './total/reducer';
import userReducer from './user/reducer';


export default combineReducers({
    cart: cartReducer,
    productStore: productReducer,
    total: totalReducer,
    user: userReducer
});
