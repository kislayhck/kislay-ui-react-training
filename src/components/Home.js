import React from 'react'
import SideBar from '../utils/Sidebar/SideBar'
import BodyContent from './BodyContent'

function Home() {
    return (
        <div className = "row main__class">
        <div className="col-md-3">
        <SideBar />
        </div>
        <div className="col-md-8">
        <BodyContent />    
        </div>        
        </div>
    )
}

export default Home
