class DiscountHelper {

    _discountRuleCollection = [];

    addDiscountRule(rule) {
        this._discountRuleCollection.push(rule);
    }

    getTotalPrice(cartProducts, currentUserTypeId) {

        let getDiscount = (discount) => (customerTypeId, updatedItems) => {
            if (customerTypeId != discount.customerTypeId) {
                return 0;
            }

            return Math.floor(updatedItems.reduce(
                (productCounter, item) =>
                    (item.id == discount.productId) ? productCounter + item.quantity : productCounter, 0)
                / discount.numberOfItemsRequired) * discount.price
        };

        let totalPrice = cartProducts.reduce(
            (total, item) => total + (item.price * item.quantity), 0);

        let totalDiscount = 0;
        totalDiscount = this._discountRuleCollection.reduce((sum, p) => {
            let calc = getDiscount(p);
            sum = sum + calc(currentUserTypeId, cartProducts);
            return sum;
        }, 0);

        return totalPrice - totalDiscount;

    }
}

export default DiscountHelper;