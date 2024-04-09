import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

const ScatterPlot = () => {
  const [series, setSeries] = useState([
    { name: 'TEAM 1', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }) },
    { name: 'TEAM 2', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }) },
    { name: 'TEAM 3', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, { min: 10, max: 60 }) },
    { name: 'TEAM 4', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 60 }) },
    { name: 'TEAM 5', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, { min: 10, max: 60 }) }
  ]);

  
  const [options] = useState({
    chart: {
      height: 350,
      type: 'scatter',
      toolbar: {
        show: false // Ensures the toolbar is not shown
      }
    },
    dataLabels: {
      enabled: false
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
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      max: 70
    },
    download: false // Hide the download button
  });
  

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="scatter" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ScatterPlot;
