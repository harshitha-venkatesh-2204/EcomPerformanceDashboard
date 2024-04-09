import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ProfitWidget = () => {
  useEffect(() => {
    const sparklineData = [20, 40, 25, 50, 35, 60, 45, 70, 55];
    
    const options = {
      series: [{
        data: sparklineData
      }],
      chart: {
        type: 'bar',
        height: 220,
        sparkline: {
          enabled: true
        },
        background: '#fff'
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      colors: ['#33cc33'],
      title: {
        text: '$132,455',
        offsetX: 0,
        style: {
          fontSize: '24px',
          color: '#808080'
        }
      },
      subtitle: {
        text: 'Profit',
        offsetX: 0,
        style: {
          fontSize: '14px',
          color: '#808080'
        }
      },
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#profit-widget"), options);
    chart.render();

    // Clean up function
    return () => chart.destroy();
  }, []);

  return (
    <div id="profit-widget" />
  );
};

export default ProfitWidget;
