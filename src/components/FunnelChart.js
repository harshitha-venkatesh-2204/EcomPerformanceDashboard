import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const FunnelChart = () => {
  const [series] = useState([
    {
      name: "Product Sales",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false // This will hide the toolbar including the download button
      }
    },
    colors: ['#43e83a'],
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
        // Assuming the label is the product name
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
        'Product H',
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

export default FunnelChart;
