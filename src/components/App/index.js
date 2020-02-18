import React from "react";
import Cart from "../../components/Cart";
import ProductList from "../ProductList";
import UserInfo from "../User";

function App() {
  return (<React.Fragment>
    <div class="container">
      <UserInfo></UserInfo>
      <ProductList></ProductList>
      <Cart></Cart>
    </div>
  </React.Fragment>)
}
export default App;
