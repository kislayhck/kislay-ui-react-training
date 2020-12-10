import React from 'react'
import './style.css'

const Toggle = (props) => {
    return (
        <div>
        <button id="toggle" onClick={props.click}>&#8801;</button>
        </div>
    )
}

export default Toggle
