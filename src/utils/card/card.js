import React from 'react'

function Card(props) {
    return (
        <div className="card border-primary mb-3">
        <div class="card-header">{props.header}</div>
        <div class="card-body text-primary">
        <h5 class="card-title">{props.title}</h5>
        </div>
        </div>
    )
}

export default Card
