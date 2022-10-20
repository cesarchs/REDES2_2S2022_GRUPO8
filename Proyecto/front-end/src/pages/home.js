import React from "react";
import { useEffect, useState } from 'react';

import {BsFillCaretRightSquareFill, BsFillCaretLeftSquareFill} from "react-icons/bs";
import { Header } from "../components/header";



export function Home(){

    const [data, setData] = useState([])    
    
    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/home`, reqOps)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    
    return(
        <div>
            <Header/>
            <div className="container abusivo">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner mt-3" >

                        {
                            data.map( (obj, index) => {
                                if(index === 0){
                                    return(<div className="carousel-item active"  key={index}>
                                        <img src={obj.img} alt="" width="100%" height="500px"/>
                                    </div>)
                                }else{
                                    return (<div className="carousel-item"  key={index}>
                                        <img src={obj.img} alt="" width="100%" height="500px"/>
                                    </div>)
                                }

                            })
                        }
                        
                    </div>

                    <div className="container d-flex justify-content-center mt-5">
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