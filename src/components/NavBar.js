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
                <h2>{props.image}</h2>
            </div>
        </header>
    );
}
