import React,{useState} from 'react'
import SideBar from '../Sidebar/SideBar'
import SideNav from '../sideNav/SideNav'
import Toggle from '../sideNav/Toggle'
import './style.css'


function Header() {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openHandler = () => {
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }

    const SidebarCloseHandler = () => {
        setSidebarOpen(false)
    }

    let sidebar
    if(sidebarOpen){
        sidebar = <SideNav close={SidebarCloseHandler} sidebar={"sideNav"} />
    }

    return (
        <div className="header">
            <div className="search"> 
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            </div>
            <div className="language"> 
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
            </div>
            </div>
            <div className="setting"> 
           <a href="#" className="setting__logo"><i class="fas fa-cog"></i></a>
            </div>
            <div className="propfile"> 
                <div className="profile__image">
                    <a className="profile__lgo"></a>
                </div>
                <div className="profile__name">
                    Kislay
                   
                </div>
                <Toggle click={openHandler} />
                    {sidebar} 
            </div>   
            
            
            
        </div>
    )
}

export default Header
