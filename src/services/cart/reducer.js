import { ADD_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';


const initialState = {
    products: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productToAdd: Object.assign({}, action.payload)
            };
        case CHANGE_PRODUCT_QUANTITY:
            return {
                ...state,
                productToChange: Object.assign({}, action.payload)
            };
        default:
            return state;
    }
}