
import { UPDATE_CART } from './actionTypes';

export const updateCart = (cartProducts, currentUser) => dispatch => {
    let totalPrice = cartProducts.reduce((sum, p) => {
        sum += p.price * p.quantity;
        return sum;
    }, 0);

    let SECOND_BITE_CLASSIC_AD_DISCOUNT = {
        product: { customerTypeId: 'SECOND_BITE', id: 'CLASSIC_AD', price: 269.99, numberOfItemsRequired: 3 },
    }

    let MYER_STANDOUT_AD_DISCOUNT = {
        product: { customerTypeId: 'MYER', id: 'STANDOUT_AD', price: 322.99, numberOfItemsRequired: 5 },
    }

    let MYER_PREMIUM_AD_DISCOUNT = {
        product: { customerTypeId: 'MYER', id: 'PREMIUM_AD', price: 5, numberOfItemsRequired: 1 },
    }

    let AXIL_STANDOUT_AD_DISCOUNT = {
        product: { customerTypeId: 'AXIL', id: 'STANDOUT_AD', price: 23, numberOfItemsRequired: 1 },
    }

    let getDiscount = (discount) => (customerTypeId, updatedItems) => {
        if (customerTypeId != discount.product.customerTypeId) {
            return 0;
        }

        return Math.floor(updatedItems.reduce(
            (productCounter, item) =>
                (item.id == discount.product.id) ? productCounter + item.quantity : productCounter, 0)
            / discount.product.numberOfItemsRequired) * discount.product.price
    };

    let secondBiteClassicAdDiscount = getDiscount(SECOND_BITE_CLASSIC_AD_DISCOUNT);
    let myerStandoutDiscount = getDiscount(MYER_STANDOUT_AD_DISCOUNT);
    let myerPremiumDiscount = getDiscount(MYER_PREMIUM_AD_DISCOUNT);
    let axilStandoutDiscount = getDiscount(AXIL_STANDOUT_AD_DISCOUNT);

    let currentUserTypeId = currentUser.typeId;
    const newTotal = cartProducts.reduce(
        (total, item) => total + (item.price * item.quantity), 0);
    totalPrice = newTotal
        - secondBiteClassicAdDiscount(currentUserTypeId, cartProducts)
        - myerStandoutDiscount(currentUserTypeId, cartProducts)
        - myerPremiumDiscount(currentUserTypeId, cartProducts)
        - axilStandoutDiscount(currentUserTypeId, cartProducts);

    let cartTotal = {
        totalPrice
    };

    dispatch({
        type: UPDATE_CART,
        payload: cartTotal
    });
};