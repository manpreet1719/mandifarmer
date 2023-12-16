import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({priceDetails}) => {
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
        labels: priceDetails.map((ele)=>new Date(ele.date).toLocaleDateString()),
        datasets: [
          {
            label: 'Avg Prices',
            data: priceDetails.map((ele)=> ele.avgprice),
            borderColor: 'rgb(667, 192, 192)',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'max Prices',
            data:  priceDetails.map((ele)=> ele.maxprice),
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'min Prices',
            data:  priceDetails.map((ele)=> ele.minprice),
            borderColor: 'rgb(80, 133, 192)',
            fill: false,
            tension: 0.1,
          }
        ],
      };

      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date', 
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price',
            },
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
  },[priceDetails]);

  return (
    <div >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
