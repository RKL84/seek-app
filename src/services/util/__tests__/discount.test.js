import DiscountHelper from '../discount';
import { formatPrice } from '../formatter';

describe('util', () => {
    describe('getTotalPrice()', () => {
        it('should return the discount price based on the rules for SecondBite user ', () => {

            let discounHelper = new DiscountHelper();
            discounHelper.addDiscountRule({ customerTypeId: 'SECOND_BITE', productId: 'CLASSIC_AD', price: 269.99, numberOfItemsRequired: 3 });

            let cartProducts = [];
            cartProducts.push({
                id: 'CLASSIC_AD',
                quantity: 3,
                price: 269.99,
            });

            let totalPrice = discounHelper.getTotalPrice(cartProducts, 'SECOND_BITE');
            console.log(totalPrice);
            expect(formatPrice(totalPrice)).toEqual('539.98');
        });

        it('should return the discount price based on the rules for Axil Coffee Roasters user ', () => {

            let discounHelper = new DiscountHelper();
            discounHelper.addDiscountRule({ customerTypeId: 'AXIL', productId: 'STANDOUT_AD', price: 23, numberOfItemsRequired: 1 });

            let cartProducts = [];
            cartProducts.push({
                quantity: 1,
                id: 'STANDOUT_AD',
                price: 322.99
            });

            let totalPrice = discounHelper.getTotalPrice(cartProducts, 'AXIL');
            console.log(totalPrice);
            expect(formatPrice(totalPrice)).toEqual('299.99');
        });

        it('should return the discount price based on the rules for Myer user for Premium Ad', () => {

            let discounHelper = new DiscountHelper();
            discounHelper.addDiscountRule({ customerTypeId: 'MYER', productId: 'PREMIUM_AD', price: 5, numberOfItemsRequired: 1 });

            let cartProducts = [];
            cartProducts.push({
                quantity: 1,
                id: 'PREMIUM_AD',
                price: 394.99
            });

            let totalPrice = discounHelper.getTotalPrice(cartProducts, 'MYER');
            console.log(totalPrice);
            expect(formatPrice(totalPrice)).toEqual('389.99');
        });


        it('should return the discount price based on the rules for Myer user for Stand out Ad', () => {

            let discounHelper = new DiscountHelper();
            discounHelper.addDiscountRule({ customerTypeId: 'MYER', productId: 'STANDOUT_AD', price: 322.99, numberOfItemsRequired: 5 });

            let cartProducts = [];
            cartProducts.push({
                quantity: 5,
                id: 'STANDOUT_AD',
                price: 322.99
            });

            let totalPrice = discounHelper.getTotalPrice(cartProducts, 'MYER');
            console.log(totalPrice);
            expect(formatPrice(totalPrice)).toEqual('1291.96');
        });
    });
});
