import React from 'react'
import Header from '../utils/Header/Header'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Test from './Test'
import Bargraph from './barGraph'
import RevenueGraph from './RevenueGraph'
import Table from './Table'
import PercentageLine from './PercentageLine';
import LineChart from './LineChart';
import LineGraph from '../utils/LineGraph/LineGraph';

function BodyContent() {
    return (
      <>  
        <div className="main__content"> 
        <Header /> 
        <div className="container">
          <h3>Dashboard</h3>
        <div className="row mt-5">
          <div className="col-md-6 mb-5 mt-5">
          <Test />
          </div>
          <div className="col-md-6">
          <Bargraph />
          </div>
        </div>
        <h3>REVENUE</h3>
        <div className="row mt-15">
          <div className="col-md-6">
          <LineChart />
          </div>
          <div className="col-md-6">
          <LineGraph />
          </div>
        </div>
        <h3 className="mt-5">TOTAL SALES</h3>
        <div className="row mt-10">
          <div className="col-md-6">
          <RevenueGraph />
          </div>
          <div className="col-md-6">
          <PercentageLine />
          </div>
        </div>
        </div>
        <h5 className="mt-5">TOP SELLING PRODUCTS</h5>
        <Table />
    </div>
    </>
    )
}

export default BodyContent;
