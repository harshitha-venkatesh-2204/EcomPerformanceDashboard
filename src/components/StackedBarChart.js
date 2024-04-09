import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedBarChart = () => {
  const options = {
    series: [
      {
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      },
      {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      },
      {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false // This will hide the toolbar including the download button
      }
    },
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4']
    },
    fill: {
      opacity: 1
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false // This will hide the data labels (percentages)
    }
  
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default StackedBarChart;
