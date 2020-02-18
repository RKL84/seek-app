
import { ADD_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
});

export const changeProductQuantity = product => ({
    type: CHANGE_PRODUCT_QUANTITY,
    payload: product
});