// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Validation from "../../components/Contact/Validation/validation";
//Internals
import "./styles.css";

const Checkout = props => {
  return (
    <div className="checkout center">
      <div className="checkout-header">
        <h2>Bienvenue chez vous.</h2>
      </div>
      <Validation />
      <p>Pay for {props.cartProducts.length} items.</p>
      <h3>Merci de remplir ce formulaire .</h3>
      <img
        alt="payment-methods"
        src="https://previews.123rf.com/images/llesia/llesia1706/llesia170600025/80203817-concept-pour-le-service-de-livraison-paiement-%C3%A0-la-livraison-une-illustration-vectorielle-moderne-de-s.jpg"
      />
      <p>
        Note: pour une commande d'un seul produit dépassant 10 unités veuillez
        nous contacter sur ce numero 58855558
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartProducts: state.cart.cartProducts
  };
};

export default connect(
  mapStateToProps,
  null
)(Checkout);
