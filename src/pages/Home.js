import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>
            <h1>Bienvenidos a nuestra aplicación</h1>
            <Link to="/login">
                <button>Iniciar Sesion</button>
            </Link>
        </div>
        </>
    )
}