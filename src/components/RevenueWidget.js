import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import api from '../Api.ts'
import { sum, map, round } from 'lodash';
import ReactApexChart from 'react-apexcharts';


const RevenueWidget = () => {
  let [sparklineData, setSparklineData] = useState([]);
  let [totalSales, setTotalSales] = useState([])

  const options = {
    // series: [{
    //   data: sparklineData
    // }],
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
      text: totalSales,
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
  useEffect(() => {

    api.get_total_sales_per_category({all:true}).then((data)=>{
      let sales_category_data = map(data.data, (x) => round(x.total_sales)).sort((a, b)=> a - b)
      console.log(sales_category_data)
      const totalSales = sum(sales_category_data)
      console.log("TOTAL SALES", round(totalSales, 0))
      setSparklineData(sales_category_data)
      setTotalSales("$ "+totalSales.toLocaleString())
    })
    
  }, []);

  return (
    // <div id="revenue-widget" />
    <ReactApexChart options={options} series={[{data: sparklineData}]} type="area" />
  );
};

export default RevenueWidget;
