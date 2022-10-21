import React from "react";

export function Noticia({titulo, descripcion}){
    return(
        <div className="card">
            <div className="card-header"> Titular: <strong>{titulo}</strong> </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{descripcion}</p>
                </blockquote>
            </div>
        </div>
    );
}