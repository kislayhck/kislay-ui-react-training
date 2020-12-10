import React from 'react'
import Header from '../utils/Header/Header'
import SideBar from '../utils/Sidebar/SideBar'


function About() {



    return (
        <div className = "row">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-8">
        <Header />
        <h1 style={{marginTop:100}}>About Us</h1>
        </div>        
        </div>
    )
}

export default About
