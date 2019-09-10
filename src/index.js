import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";
import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import NavBar from "./containers/NavBar";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShowProduct from "./containers/ShowProduct";
import Home from "./components/Home/index";

import "./globalStyles.css";

import cartReducer from "./containers/Cart/reducer";
import ProductList from "./containers/ProductList";
const rootReducer = combineReducers({
  cart: cartReducer
});

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <BrowserRouter>
      <BaseLayout>
        <NavBar>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/products/:type/:id" component={ShowProduct} />
            <Route path="/product" component={App} />
            <Route path="/" component={Home} />
          </Switch>
        </NavBar>
        <Footer />
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
