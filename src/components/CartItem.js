import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/styles/CartItem.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setProduct,
  addToCart,
  deleteProduct
} from "../redux/actions/productActions";
const bin = require("../static/images/delete.png");

function CartItem(props) {
  const item = props.item;
  const deleteProduct = () => {
    props.deleteProduct(item.id);
    props.trigger();
  };
  const [quantity, setQuantity] = useState(item.quantity);
  const setProduct = () => {
    const product = {
      ...item.product,
      productId: item.id,
      quantity
    };
    props.setProduct(product);
    props.trigger();
  };
  const increment = () => {
    if (quantity < 20) {
      setQuantity(prevState => prevState + 1);
      props.addToCart({ id: item.id, quantity: quantity + 1 });
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
      props.addToCart({ id: item.id, quantity: quantity - 1 });
    }
  };
  return (
    <div className="ItemCart">
      <Link className="PhotoContainerCart" onClick={setProduct} to="/product">
        <img
          alt="media"
          src={item.product.photo_1}
          width="100%"
          height="auto"
        />
      </Link>
      <div className="ContentCotainerCart">
        <div className="ItemCategoryCart">
          {item.product.name.split("-")[0]}
        </div>
        <div className="ItemPriceCart">€{item.product.price}.00</div>
        <div className="ItemColorCart">
          Color: {item.product.name.split("-")[1]}
        </div>
        <div className="ItemQuantityCart">
          <div>Quantity:</div>
          <div className="QuntityInputCart">
            <button onClick={increment}>+</button>
            <div>{quantity}</div>
            <button onClick={decrement}>-</button>
          </div>
        </div>
      </div>
      <div className="BinCart" onClick={deleteProduct}>
        <img alt="bin" src={bin} width="25px" height="25px" />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  setProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setProduct: product => dispatch(setProduct(product)),
  addToCart: product => dispatch(addToCart(product)),
  deleteProduct: productId => dispatch(deleteProduct(productId))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);