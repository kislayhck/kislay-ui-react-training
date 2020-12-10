import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Bargraph extends Component {
    constructor(props){
        super(props);
        this.state={
            options:{
                chart: {
                    background: '#f4f4f4',
                    forColor: '#333'
                },
                xaxis: {
                    categories: [
                        'New York',
                        'Pune',
                        'Kerela',
                        'Mumbai',
                        'Delhi',
                        'Haryana',
                    ]
                }
            },
            series:[{
                name:"population",
                data: [
                    8550404,
                    2552204,
                    4550704,
                    6550204,
                    7550304,
                    8558404,
                ]
            }]
        }
    }


    render() {
        return (
            <div>
               <Chart
               options={this.state.options}
               series={this.state.series}
               type="bar"
               height="450"
               width="100%"
               />
            </div>
        )
    }
}
