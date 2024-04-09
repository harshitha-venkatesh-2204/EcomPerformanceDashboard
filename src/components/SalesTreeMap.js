import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesTreemap = () => {
  const options = {
    series: [
      {
        data: [
          {
            x: 'New Delhi',
            y: 218
          },
          {
            x: 'Kolkata',
            y: 149
          },
          {
            x: 'Mumbai',
            y: 184
          },
          {
            x: 'Ahmedabad',
            y: 55
          },
          {
            x: 'Bengaluru',
            y: 84
          },
          {
            x: 'Pune',
            y: 31
          },
          {
            x: 'Chennai',
            y: 70
          },
          {
            x: 'Jaipur',
            y: 30
          },
          {
            x: 'Surat',
            y: 44
          },
          {
            x: 'Hyderabad',
            y: 68
          },
          {
            x: 'Lucknow',
            y: 28
          },
          {
            x: 'Indore',
            y: 19
          },
          {
            x: 'Kanpur',
            y: 29
          }
        ]
      }
    ],
    legend: {
      show: false
    },
    chart: {
      height: 100,
      type: 'treemap',
      toolbar: {
        show: false // This will hide the toolbar including the download button
      }
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="treemap" />
    </div>
  );
};

export default SalesTreemap;
