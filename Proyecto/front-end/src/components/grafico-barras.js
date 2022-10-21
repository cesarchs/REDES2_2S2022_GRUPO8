import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: false,
        text: 'Chart.js Bar Chart',
        },
    },
};

export function GraficoBarras({ucron}){

    const labels = ucron.map(obj=>obj.Fecha);
    const data = {
        labels,
        datasets: [
          {
            label: 'UcronCoin',
            data: ucron.map(obj=>obj.cantidad),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };

    return <Bar options={options} data={data} />;
}