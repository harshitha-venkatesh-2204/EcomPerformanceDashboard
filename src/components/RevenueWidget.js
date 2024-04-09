import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const RevenueWidget = () => {
  useEffect(() => {
    const sparklineData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
    const options = {
      series: [{
        data: sparklineData
      }],
      chart: {
        type: 'area',
        height: 220,
        sparkline: {
          enabled: true
        },
        background: '#fff'
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3,
        colors: ['#0052CC']
      },
      colors: ['#0052CC'],
      title: {
        text: '$424,652',
        offsetX: 0,
        style: {
          fontSize: '24px',
          color: '#808080'
        }
      },
      subtitle: {
        text: 'Revenue',
        offsetX: 0,
        style: {
          fontSize: '14px',
          color: '#808080'
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#revenue-widget"), options);
    chart.render();

    // Clean up function
    return () => chart.destroy();
  }, []);

  return (
    <div id="revenue-widget" />
  );
};

export default RevenueWidget;
