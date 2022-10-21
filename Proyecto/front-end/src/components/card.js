import React from "react";

export function Card({img, titulo, descripcion, curso}){
    return(
        <div className="col-lg-4 mb-5">
            <div className="card shadow">
                <img className="img-fluid" src={img} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{titulo}</h4>
                    <p className="card-text">{descripcion}</p>
                   { curso &&  <strong className="text-danger"> {curso} </strong> } 
                </div>
            </div>
        </div>
    );
}