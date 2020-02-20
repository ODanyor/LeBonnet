import React, { useEffect } from "react";
import "../static/styles/ProductsPage.css";
// Components
import Item from "../components/Item";
import Spinner from "../components/Spinner";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, getCart } from "../redux/actions/productActions";

function ProductsPage(props) {
  useEffect(() => {
    props.getProducts();
    props.getCart();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="ProductsContainer">
        <nav>
          <div>Beanies</div>
          <div>Scarves</div>
          <div>Gloves</div>
          <div>Exclusives</div>
        </nav>
        <div className="ProductsContent">
          <div>
            <h2 className="Title">Beanies</h2>
            <div className="ItemsContainer">
              {props.loading ? (
                <Spinner />
              ) : (
                props.products.map(product => {
                  if (product.product.category === "beanies") {
                    return (
                      <Item
                        key={product.id}
                        productId={product.id}
                        product={product.product}
                      />
                    );
                  } else return null;
                })
              )}
            </div>
          </div>
          <div>
            <h2 className="Title">Scarves</h2>
            <div className="ItemsContainer">
              {props.loading ? (
                <Spinner />
              ) : (
                props.products.map(product => {
                  if (product.product.category === "scarves") {
                    return (
                      <Item
                        key={product.id}
                        productId={product.id}
                        product={product.product}
                      />
                    );
                  } else return null;
                })
              )}
            </div>
          </div>
          <div>
            <h2 className="Title">Gloves</h2>
          </div>
          <div>
            <h2 className="Title">Exclusives</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductsPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  getCart: () => dispatch(getCart())
});

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
