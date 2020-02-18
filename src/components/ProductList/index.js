import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { connect } from "react-redux";

class ProductList extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    const { products, cartTotal } = this.props;

    let productUI = products.map(p => {
      return <Product product={p} key={p.id} />;
    });

    return (
      <React.Fragment>
        <table
          id="productList"
          class="table table-hover table-bordered table-condensed">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Product</th>
              <th style={{ width: "20%" }}>Price</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody>{productUI}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productStore.products,
  cartTotal: state.total.data
});

export default connect(mapStateToProps, null)(ProductList);
