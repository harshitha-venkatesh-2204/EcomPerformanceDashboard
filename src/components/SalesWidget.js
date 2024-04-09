import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const SalesWidget = () => {
  useEffect(() => {
    const sparklineData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
    
    const options = {
      series: [{
        data: sparklineData
      }],
      chart: {
        type: 'line',
        height: 220,
        sparkline: {
          enabled: true
        },
        background: '#fff'
      },
      stroke: {
        curve: 'straight'
      },
      markers: {
        size: 0
      },
      colors: ['#FF4560'],
      title: {
        text: '$312,323',
        offsetX: 0,
        style: {
          fontSize: '24px',
          color: '#808080'
        }
      },
      subtitle: {
        text: 'Sales',
        offsetX: 0,
        style: {
          fontSize: '14px',
          color: '#808080'
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#sales-widget"), options);
    chart.render();

    // Clean up function
    return () => chart.destroy();
  }, []);

  return (
    <div id="sales-widget" />
  );
};

export default SalesWidget;
