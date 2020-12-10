import React,{useState} from 'react'
import Toggle from './Toggle'
import './style.css'


const SideNav = (props) =>  {
    const [sidebarClass,setSidebarClass] = useState(props.sidebar)

    const closeHandler= (e) => {
        e.preventDefault()
        setSidebarClass("sidenav close")
        props.close()
    
    }

    return (
    <div className="sidenav">
        <h2 className="mt-5">Toggle</h2>
        <button id="close" className="btn-danger" onClick={closeHandler}>Close</button>
        <div className="user__info">
            <h3 className="user__name">Profile picture</h3>
            <button className="btn btn-primary change__button">Change</button>
            <ul className="toggle__setting">
                <li>
                    <a href="#">Change Password</a>
                </li>
            </ul>
            <ul className="toggle__setting">
                <li>
                    <a href="#">Mode</a>
                </li>
            </ul>
            <div class="custom-control custom-switch toggle__switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches"/>
            <label class="custom-control-label" for="customSwitches"></label>
            </div>
        </div>
    </div>
    )
}

export default SideNav
