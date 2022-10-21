import React from "react";

export function Cargo({img, titulo, descripcion}){
    return(
        <div className="card">
            <img src={img} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                {descripcion}
                </p>
            </div>
        </div>
    );
}