import React from "react";

import {BsFillCaretRightSquareFill, BsFillCaretLeftSquareFill} from "react-icons/bs";

import { Header } from "../components/header";
import { Card } from "../components/card";

export function Admins(){
    return(
        <div>
            <Header/>
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner mt-3">
                        
                        <div className="carousel-item active">
                            <div className="row">
                                <Card img={"https://dummyimage.com/400x400/000/fff"} titulo={"XDXDXDXD"} descripcion={"With supporting text below as a natural lead-in to additional content."}/>
                                <Card img={"https://dummyimage.com/400x400/000/fff"} titulo={"XDXDXDXD"} descripcion={"With supporting text below as a natural lead-in to additional content."}/>
                                <Card img={"https://dummyimage.com/400x400/000/fff"} titulo={"XDXDXDXD"} descripcion={"With supporting text below as a natural lead-in to additional content."}/>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <Card img={"https://dummyimage.com/400x400/000/fff"} titulo={"222222"} descripcion={"With supporting text below as a natural lead-in to additional content."}/>
                                <Card img={"https://dummyimage.com/400x400/000/fff"} titulo={"222222"} descripcion={"With supporting text below as a natural lead-in to additional content."}/>
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