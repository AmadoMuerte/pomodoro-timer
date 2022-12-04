import React from 'react';
import './Schedule.css'

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

function Schedule(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const labels = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const week = [10, 15, 25, 36, 80, 90, 120]

    const data = {
        labels,
        datasets: [
          {
            label: 'Week',
            data: week,
            backgroundColor: 'white',
            color: "black"
          },
        ],
    };

    return (
        <div className='schedule'>
            <Bar data={data} />
        </div>
    );
}

export default Schedule;