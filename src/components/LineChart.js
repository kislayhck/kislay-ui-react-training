import React from 'react'
import ReactApexChart from 'react-apexcharts'

function LineChart() {
           
  const series =  [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
  const options = {
        chart: {
          type: 'line',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    
  return (
      <div>
        <ReactApexChart options={options} series={series} type="line" />
      </div>
  )
}
     


export default LineChart
