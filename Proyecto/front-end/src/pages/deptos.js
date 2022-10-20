import React from "react";

import { Cargo } from "../components/cargo"
import { Header } from "../components/header";

export function Deptos(){
    return(
        <div className="container">
            <Header/>
            <div className="container mt-4">
                <div className="container bg-light p-5 shadow">
                    <h3>Funcines Públicas</h3>
                    <hr></hr>
                    <div className="card-group">
                        <Cargo titulo={"EL M[as cabron :v"} descripcion={"aslkdmaslkmdkasmdls dlaksdmlaskd as dlkasdlks dlsak dlsakmdlas kdlsamdlaks dlaks dlkmasd."} />
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Últimas Noticias</h1>
                <hr></hr>
            </div>
        </div>
    )

}