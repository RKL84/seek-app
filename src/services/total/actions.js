
import { UPDATE_CART } from './actionTypes';
import { DiscountHelper } from '../util';

export const updateCart = (cartProducts, currentUser) => dispatch => {

    let discountHelper = new DiscountHelper();
    discountHelper.addDiscountRule({ customerTypeId: 'SECOND_BITE', productId: 'CLASSIC_AD', price: 269.99, numberOfItemsRequired: 3 });
    discountHelper.addDiscountRule({ customerTypeId: 'MYER', productId: 'STANDOUT_AD', price: 322.99, numberOfItemsRequired: 5 });
    discountHelper.addDiscountRule({ customerTypeId: 'MYER', productId: 'PREMIUM_AD', price: 5, numberOfItemsRequired: 1 });
    discountHelper.addDiscountRule({ customerTypeId: 'AXIL', productId: 'STANDOUT_AD', price: 23, numberOfItemsRequired: 1 });

    let totalPrice = discountHelper.getTotalPrice(cartProducts, currentUser.typeId);
    let cartTotal = {
        totalPrice
    };

    dispatch({
        type: UPDATE_CART,
        payload: cartTotal
    });
};