import React, { Component } from "react";
import PropTypes from "prop-types";

class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    changeProductQuantity: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
      isMouseOver: false
    };
  }

  handleOnIncrease = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity + 1;
    changeProductQuantity(product);
  };

  handleOnDecrease = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity - 1;
    changeProductQuantity(product);
  };

  render() {
    const { product } = this.state;

    return (
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-10">
              <h5 class="nomargin">{product.title}</h5>
            </div>
          </div>
        </td>

        <td data-th="Price">
          {" "}
          <div>
            <button
              onClick={this.handleOnDecrease}
              disabled={product.quantity === 1 ? true : false}
              className="change-product-button"
            >
              -
            </button>

            <button
              onClick={this.handleOnIncrease}
              className="change-product-button"
            >
              +
            </button>
          </div>
        </td>

        <td data-th="Quantity">{product.quantity}</td>
      </tr>
    );
  }
}

export default CartProduct;
