import React from 'react'
import Card from '../utils/card/card'


function Test() {
    return (
        <div className="card__componenet">
        <div className="row">    
        <div className="col-md-6">
            <Card header="Customers" title="45" />
            <Card header="Customers" title="45" />
        </div>
        <div className="col-md-6">
            <Card header="Customers" title="45" />
            <Card header="Customers" title="45" />
        </div>
        </div>
        </div>

)
}

export default Test
