import React from "react";
import { Link } from 'react-router-dom'


export function Header() {
    return(
        <div className="container mt-2">
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light p-3 shadow">
                <a className="navbar-brand" href="/">UCRÓN {process.env.REACT_APP_PC}</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/admins" className="nav-item nav-link">Administradores</Link>
                        <Link to="/developers" className="nav-item nav-link">Desarrolladores</Link>
                        <Link to="/deptos" className="nav-item nav-link">Función Pública</Link>
                        <Link to="/economia" className="nav-item nav-link">Económico</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}