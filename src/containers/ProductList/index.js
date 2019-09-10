// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
// Externals
import PRODUCTS from "../../assets/data/products";
import "../../globalStyles.css";
// Internals
import Options from "./components/Options";
import "./styles.css";

const IPTV = filter(PRODUCTS, ["type", "iptv"]);

const REC = filter(PRODUCTS, ["type", "recepteur"]);

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStarsat: false,
      showSamsat: false,
      showPinacle: false,
      showIptv: false,
      showRecepteur: false
    };
  }

  toggleFilter = key => {
    const toggledValue = !this.state[key];
    this.setState({ [key]: toggledValue });
  };

  filterProducts = () => {
    const { showRecepteur, showIptv } = this.state;
    let productsByCategory = [];

    if (showRecepteur) {
      productsByCategory = productsByCategory.concat(REC);
    }
    if (showIptv) {
      productsByCategory = productsByCategory.concat(IPTV);
    }

    if (isEmpty(productsByCategory)) {
      productsByCategory = PRODUCTS;
    }

    return this.filterBySize(productsByCategory);
  };

  filterBySize = productsByCategory => {
    const { showSamsat, showStarsat, showPinacle } = this.state;
    let productsBySize = [];

    if (showSamsat) {
      const samsatProductsByCategory = filter(productsByCategory, [
        "size",
        "samsat"
      ]);
      productsBySize = productsBySize.concat(samsatProductsByCategory);
    }
    if (showStarsat) {
      const starsatProductsByCategory = filter(productsByCategory, [
        "size",
        "starsat"
      ]);
      productsBySize = productsBySize.concat(starsatProductsByCategory);
    }
    if (showPinacle) {
      const pinacleProductsByCategory = filter(productsByCategory, [
        "size",
        "pinacle"
      ]);
      productsBySize = productsBySize.concat(pinacleProductsByCategory);
    }
    if (!showSamsat && !showStarsat && !showPinacle) {
      productsBySize = productsByCategory;
    }

    return productsBySize;
  };

  render() {
    const { filterProducts, state, toggleFilter } = this;

    return (
      <div className="row">
        <Options toggleFilter={toggleFilter} options={state} />
        <div className="col product-item">
          {map(filterProducts(), product => (
            <Link
              key={product.id}
              to={`/products/${product.type}/${product.id}`}
            >
              <div className="col s12 col m6 col l4">
                <div className="product-image">
                  <img alt={product.name} src={product.img} />
                </div>
                <div className="product-details">
                  <h1 id="product-name">{product.name}</h1>
                  <h4 id="product-description">{product.description}</h4>
                </div>
                <div className="price-add">
                  <h5 id="product-price">TND{product.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
