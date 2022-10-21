import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const options = {
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: false 
        },
    },
    scales:{
        yAxes:{
            grid: {
                drawBorder: true,
                color: '#9F9F9F',
            },
            ticks:{
                beginAtZero: true,
                color: 'black',
                fontSize: 14,
            }
        },
        xAxes: {
            grid: {
                drawBorder: true,
                color: '#9F9F9F',
            },
            ticks:{
                beginAtZero: true,
                color: 'black',
                fontSize: 14,
            }
        },
    },
};



export function GraficoLineal({fechas, ucron, dolar, euro}){
    
    let data = {
        labels: fechas,
        datasets: [
            {
                label: 'Euro',
                data: euro.map(obj=>obj.cantidad),
                borderColor: 'rgb(255, 193, 7)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            {
                label: 'Dolar',
                data: dolar.map(obj=>obj.cantidad),
                borderColor: 'rgb(13, 110, 253)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            {
                label: 'UcronCoin',
                data: ucron.map(obj=>obj.cantidad),
                borderColor: 'rgb(0, 200, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        ],
    };
    return (
        <Line options={options} data={data}/>
    );
}