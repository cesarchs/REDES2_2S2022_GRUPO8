import React from "react";

export function Noticia({titulo, descripcion}){
    return(
        <div className="card">
            <div className="card-header"> Noticia: Quote </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </div>
        </div>
    );
}