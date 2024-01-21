import React from 'react';
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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'chart',
        },
    },
};

const labels = ['January', 'February' , 'March' , 'April'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [3 , 10 , 8 , 25],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [8, 27 , 10, 2],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function DataChart() {
    return <Bar height='300px' options={options} data={data} />;
}
