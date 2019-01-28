import React from 'react';

function Navbar(props){
    return(
        <li><a href="#">{props.title}</a></li>
    )
}

function Header(props){
    return (
        <header className="header">
            <div className="container">
                <nav className="my_navbar">
                    <a className="nav-logo" href="#">Logo</a>
                    <ul className="navbar-nav">
                        <Navbar title="Новости"/>
                        <Navbar title="Купить билет"/>
                        <Navbar title="Туры"/>
                        <Navbar title="О нас"/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header