import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy any existing chart
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      // Define your data
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Avg Prices',
            data: [10,20],
            borderColor: 'rgb(667, 192, 192)',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'max Prices',
            data: [16, 20, 15, 30, 25],
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
            tension: 0.1,
          }
        ],
      };

      // Define chart options
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      // Create a new chart
      chartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
