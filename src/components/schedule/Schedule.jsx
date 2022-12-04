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

  const labels = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'friday',
        'saturday',
        'sunday',
  ]

  const data = {
      labels,
      datasets: [
        {
          label: 'minutes',            
          data: props.weekWork,
          backgroundColor: 'white',
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