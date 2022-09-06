import React from "react";
import Carrito from "../assets/shopping-cart.png"

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Kardash Sneakers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Hombre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mujer
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Promociones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Productos discontinuados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cupón de Descuento
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ayuda
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"></a>
            </li>
          </ul>
           <div className="d-flex align-middle justify-content-center">
            <p>{props.quantity}</p>
            <img className="mx-5" width={40} height={40} src={Carrito}/>
           </div>
        </div>
      </div>
    </nav>
  );
}
