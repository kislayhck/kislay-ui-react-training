import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function SideBar() {
    return (
        <div>
        <div class="sidebar">
        <h2>Sidebar</h2>
        <ul>
            <li><Link to="/"><i class="fas fa-home"></i>Home</Link></li>
            <li><Link to="#"><i class="fas fa-user"></i>Profile</Link></li>
            <li><Link to="/about"><i class="fas fa-address-card"></i>About</Link></li>
            <li><Link to="#"><i class="fas fa-project-diagram"></i>portfolio</Link></li>
            <li><Link to="#"><i class="fas fa-blog"></i>Blogs</Link></li>
            <li><Link to="#"><i class="fas fa-address-book"></i>Contact</Link></li>
            <li><Link to="#"><i class="fas fa-map-pin"></i>Map</Link></li>
        </ul> 
        </div>
        </div>
    )
}

export default SideBar;