import React from 'react';
import './style.css';

function SidebarAirline(props){
    return (
        <p><a href="#">{props.airline}</a></p>
    )
}

function Sidebar(props){
    return (
        <div className="sidebar">
            <h2>{props.airlines}</h2>
            <div className="nav_sidebar">
                <SidebarAirline airline="C.A.T. Company" />
                <SidebarAirline airline="ОсОО Tez Jet" />
                <SidebarAirline airline="Air Kyrgyzstan" />
            </div>
        </div>
    )
}


export default Sidebar