import React from "react";

import { GraficoLineal } from "../components/grafico-lineal";
import { GraficoBarras } from "../components/grafico-barras";

import { useEffect, useState } from 'react';
import { Header } from "../components/header";

export function Economia(){
    const [data, setData] = useState([]);

    useEffect(() => {        
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        
        fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/desarrollo`, reqOps)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    let euro = data.filter(obj => obj.moneda === "Euro");
    let dolar = data.filter(obj => obj.moneda === "USD");
    let ucron = data.filter(obj => obj.moneda === "UcronCoin");
    let fechas =  ucron.map(obj => obj.Fecha);

    return(
        <div className="container">
            <Header/>
            <div className="container mt-4">
                <div className="container bg-light p-5 shadow">
                    <h3>Desarrollo Económico</h3>
                    <hr></hr>
                    <h5>Tipo de Cambio Euro-Dólar-UcronCoin</h5>
                    <GraficoLineal fechas={fechas} euro={euro} dolar={dolar} ucron={ucron} />
                    <h5 className="mt-5">Valor de Moneda de Ucrón</h5>
                    <GraficoBarras ucron={ucron} />
                </div>
            </div>
        </div>
    )
}