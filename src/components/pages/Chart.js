import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

function DonutChart({coin}) {
    
    const data = {
        labels: ['Bitcoin', 'Etherium', 'Litecoin'],
        datasets: [
        {
            labels: '$',
            data: [124000, 78000, 35000],
            backgroundColor: [
            'orange',
            'blue',
            'green',
            ],
            borderWidth: null,
            color: '#fff'
        },
        ],
  };
const options = {
  maintainAspectRatio: true
};

  return <Doughnut data={data} options={options} />;

}

export default DonutChart
