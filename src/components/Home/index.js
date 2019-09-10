import React, { Component } from "react";
import "../Home/home.css";
import ProductList from "../../containers/ProductList/index.js";
export default class home extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            className="f1"
            src="https://http2.mlstatic.com/tv-box-tanix-tx3-mini-2-gb-de-ram-rom-de-16-gb-D_NQ_NP_788570-MLB26889899248_022018-F.jpg"
            alt="Ma photo de profil"
          />
          <a
            href="/product"
            className="btn btn-outline-success  "
            role="button"
            aria-pressed="true"
          >
            Get started & choose your package{" "}
          </a>
        </div>
        <div>
          <img
            className="f1"
            src="https://lh3.googleusercontent.com/EgWADwQREJFf4rtjDssBB-fp5_D6uv9G6o0z2PY0K3FZAT65W1eHlMMWCNucpG60gJvM=w984-h626-rw"
            class="d-block w-100"
            alt="..."
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.forzaiptv.forzaiptviptvbox&hl=en_US"
            className="btn btn-outline-light"
            role="button"
            aria-pressed="true"
          >
            Download 4za Iptv App
          </a>
        </div>
      </div>
    );
  }
}
