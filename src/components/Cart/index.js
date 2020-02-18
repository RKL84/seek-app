import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import { updateCart } from "../../services/total/actions";
import {
  removeProduct,
  changeProductQuantity
} from "../../services/cart/actions";

class Cart extends React.Component {
  static propTypes = {
    cartProducts: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToChange !== this.props.productToChange) {
      this.changeProductQuantity(nextProps.productToChange);
    }

    if (nextProps.user !== this.props.user) {
      this.changeUser(nextProps.user);
    }
  }

  changeUser = newUser => {
    const { cartProducts, updateCart } = this.props;
    updateCart(cartProducts, newUser);
  };

  addProduct = product => {
    const { cartProducts, updateCart, user } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts, user);
  };

  changeProductQuantity = changedProduct => {
    const { cartProducts, updateCart, user } = this.props;
    const product = cartProducts.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;

    if (product.quantity <= 0) {
      this.removeProduct(product);
    }

    updateCart(cartProducts, user);
  };

  removeProduct = product => {
    const { cartProducts, updateCart, user } = this.props;
    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts, user);
    }
  };

  render() {
    const { cartTotal, cartProducts, changeProductQuantity } = this.props;
    const cartProductCollection = cartProducts.map(p => {
      return (
        <CartProduct
          product={p}
          removeProduct={removeProduct}
          changeProductQuantity={changeProductQuantity}
          key={p.id}
        />
      );
    });

    return (
      <React.Fragment>
        <div>
          {!cartProductCollection.length && <h2>Your CART is EMPTY</h2>}
        </div>

        {cartProductCollection.length > 0 && (
          <table id="productList" class="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Product</th>
                <th></th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>{cartProductCollection}</tbody>
            <tfoot>
              <tr>
                <td class="hidden-xs text-center">
                  <strong>Total {cartTotal.totalPrice}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data,
  user: state.user
});

export default connect(mapStateToProps, { updateCart, changeProductQuantity })(
  Cart
);
