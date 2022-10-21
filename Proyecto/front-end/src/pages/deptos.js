import React from "react";
import { useEffect, useState } from 'react';
import { Cargo } from "../components/cargo"
import { Header } from "../components/header";
import { Noticia } from "../components/noticia";

export function Deptos(){
    const [funcion, setFuncion] = useState([]);
    const [noticias, setNoticias] = useState([]);    
    
    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/funPublic`, reqOps)
        .then(res => res.json())
        .then(data => setFuncion(data));
        
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/noticia`, reqOps)
        .then(res => res.json())
        .then(data => setNoticias(data));
    }, []);

    return(
        <div className="container">
            <Header/>
            <div className="container mt-4">
                <div className="container bg-light p-5 shadow">
                    <h3>Funcines Públicas</h3>
                    <hr></hr>
                    <div className="card-group">
                        {
                            funcion.map((obj, index) =>{
                                return(
                                    <Cargo 
                                        img={obj.img}
                                        titulo={obj.nombreFuncion} 
                                        descripcion={obj.descripcion} 
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container bg-light p-5 shadow mt-5">
                    <h3>Últimas Noticias</h3>
                    <hr></hr>
                    {
                        noticias.map((obj, index) =>{
                            return(
                                <Noticia 
                                    titulo={obj.nombreNoticia} 
                                    descripcion={obj.descripcion} 
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}