import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../../services/cart/actions";

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  return (
    <tr>
      <td data-th="Product">
        <div class="row">
          <div class="col-sm-10">
            <h4 class="nomargin">{product.title}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </td>

      <td data-th="Price">
        <p>{product.price}</p>
      </td>

      <td data-th="Quantity">
        <a
          class="btn btn-primary"
          onClick={() => addProduct(product)}
          href="#"
          role="button"
        >
          ADD TO CART
        </a>
      </td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(null, { addProduct })(Product);
