import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from "./Content";
import Footer from './Footer';


const booking = (
    <div>
        <Header/>
        <div className="container">
            <Sidebar airlines="Авиакомпании"/>
            <Content/>
        </div>
        <Footer/>
    </div>
);

ReactDOM.render(booking, document.getElementById('root'));