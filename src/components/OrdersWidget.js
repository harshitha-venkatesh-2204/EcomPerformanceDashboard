import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const OrdersWidget = () => {
  useEffect(() => {
    const sparklineData = [30, 40, 35, 50, 49, 60, 70, 91, 125]; // Example data for orders

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
      colors: ['#007bff'], // Blue color for orders
      title: {
        text: '1,235',
        offsetX: 0,
        style: {
          fontSize: '24px',
          color: '#808080'
        }
      },
      subtitle: {
        text: 'Orders',
        offsetX: 0,
        style: {
          fontSize: '14px',
          color: '#808080'
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#orders-widget"), options);
    chart.render();

    // Clean up function
    return () => chart.destroy();
  }, []);

  return (
    <div id="orders-widget" />
  );
};

export default OrdersWidget;
