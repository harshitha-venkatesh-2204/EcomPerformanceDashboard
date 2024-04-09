import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LeastProducts = () => {
  const [series] = useState([
    {
      name: "Product Sales",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200].reverse(), // Assuming the last value is the least selling
    },
  ]);

  // Find the index of the least selling product
  const leastSellingProductIndex = series[0].data.indexOf(Math.min(...series[0].data));

  // Assign colors dynamically, red for the least selling, green for the rest
  const colors = series[0].data.map((value, index) => index === leastSellingProductIndex ? '#FF0000' : '#008000');

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false // This will hide the toolbar including the download button
      }
    },
    colors: ['#fa2c1e'], // Apply the colors dynamically
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ' - ' + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      categories: [
        'Product A',
        'Product B',
        'Product C',
        'Product D',
        'Product E',
        'Product F',
        'Product G',
        'Product H', // Assuming 'Product H' is the least selling
      ],
    },
    legend: {
      show: false,
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default LeastProducts;
