import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import api from '../Api.ts'
// import * as _ from 'lodash';

const StackedBarChart = () => {
  console.log("bars");
  const [series_data, setSeriesData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(()=> {

    api.get_total_sales_per_category().then((data) => {
      let categories = [];
      let graphData = [];
      for(let item of data.data){
          
        categories.push(item.product_category_name.split("_").join(" "))
        graphData.push(item.total_sales)

      }

      // console.log(finalData)
      console.log(categories)
      setSeriesData([{
        "name": "Test",
        "data": graphData
      }]);
      setCategoriesData(categories);
    })

  }, [])
  
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      width: 1000,
      toolbar: {
        show: false // This will hide the toolbar including the download button
      }
    },
    xaxis: {
      categories: categoriesData
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
    },
    plotOptions:{
      bar:{
        horizontal: false,
        borderRadius: 0,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: '80%',
        barHeight: '70%',
        distributed: false,
        rangeBarOverlap: true,
        rangeBarGroupRows: false,
        hideZeroBarsWhenGrouped: false,
        isDumbbell: false,
        dumbbellColors: undefined,
        isFunnel: false,
        isFunnel3d: true,
        colors: {
            ranges: [{
                from: 0,
                to: 0,
                color: undefined
            }],
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
        }
    }}
  
  };

  return (
    <div>
      <ReactApexChart options={options} series={series_data} type="bar" height={350} />
    </div>
  );
};

export default StackedBarChart;
