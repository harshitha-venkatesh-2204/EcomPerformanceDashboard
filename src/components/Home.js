import React from 'react'
import ProfitWidget from './ProfitWidget';
import SalesWidget from './SalesWidget';
import RevenueWidget from './RevenueWidget';
import StackedBarChart from './StackedBarChart';
import SalesTreemap from './SalesTreeMap';
import OrdersWidget from './OrdersWidget';
import ScatterPlot from './ScatterPlot';
import FunnelChart from './FunnelChart';
import LeastProducts from './LeastProducts';


function Home() {
  return (
    <div className="page-wrapper">
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              {/* Page pre-title */}
              <div className="page-pretitle">Overview</div>
              <h2 className="page-title">Dashboard</h2>
            </div>


          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-deck row-cards">
            <div className="col-sm-6 col-lg-3">
              <RevenueWidget/>
            </div>
            <div className="col-sm-6 col-lg-3">
              <SalesWidget/>
            </div>
            <div className="col-sm-6 col-lg-3">
            <ProfitWidget/>
            </div>
            <div className="col-sm-6 col-lg-3">
             <OrdersWidget/>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">What is the total sales by product category?</h3>
                  <div id="chart-mentions">
                    <StackedBarChart/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">How does the price of products vary with their popularity?</h3>
                  <div className="ratio ratio-21x9">
                    <div>
                      <div className="w-100 h-100">
                       <ScatterPlot/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">What are the highest selling products?</h3>
                  <div id="chart-mentions">
                    <FunnelChart/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">What are the least selling products?</h3>
                  <div className="ratio ratio-21x9">
                    <div>
                      <div className="w-100 h-100">
                        <LeastProducts/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body border-bottom py-3">
                <h3 className="card-title">What is the sales across different regions?</h3>
                <div className="w-100 h-100">
                        <SalesTreemap/>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;