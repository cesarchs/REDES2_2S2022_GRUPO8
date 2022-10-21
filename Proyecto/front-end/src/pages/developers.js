import React from "react";
import {BsFillCaretRightSquareFill, BsFillCaretLeftSquareFill} from "react-icons/bs";
import { useEffect, useState } from 'react';
import { Header } from "../components/header";
import { Card } from "../components/card";

export function Developers(){
    const [data, setData] = useState([])    
    
    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/dev`, reqOps)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    console.log(data)
    return(
        <div>
            <Header/>
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner mt-3">
                        
                    <div className="carousel-item active">
                            <div className="row">
                                {
                                    data.map( (obj, index) => {
                                        if(index < 3){
                                            return(
                                                <Card img={obj.photo} 
                                                    titulo={obj.nombre} 
                                                    descripcion={obj.carnet +" - "+obj.rol}
                                                    curso={obj.curso}
                                                />
                                            );
                                        }
                                        return<div></div>;
                                    })
                                }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                {
                                    data.map( (obj, index) => {
                                        if(index > 2){
                                            return(
                                                <Card img={obj.photo} 
                                                    titulo={obj.nombre} 
                                                    descripcion={obj.carnet +" - "+obj.rol}
                                                    curso={obj.curso}
                                                />
                                            )
                                        }
                                        return<div></div>;
                                    })
                                }
                            </div>
                        </div>
                        
                    </div>

                    <div className="container d-flex justify-content-center ">
                        <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
                            <BsFillCaretLeftSquareFill size="50px" className="me-2" color="white"/>
                        </a>
                        <a className="" href="#carouselExampleControls" role="button" data-slide="next">
                            <BsFillCaretRightSquareFill size="50px" className="me-2" color="white"/>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    )

}