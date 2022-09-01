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
                <img src={props.image} width="100" height="100" alt="Carrito"/>
            </div>
        </header>
    );
}
