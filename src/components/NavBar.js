import React from "react"

export default function NavBar(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Bienvenido a Infinnity Kickz</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Carro</a> <a href="#/signin">De Compras</a>
            </div>
        </header>
    );
}
