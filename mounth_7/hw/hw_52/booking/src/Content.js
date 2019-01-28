import React from 'react';
import './style.css';

function AirlineList(props){
    return (
        <tbody>
        <tr>
            <td>{props.whence}</td>
            <td>{props.where}</td>
            <td>{props.number}</td>
            <td>{props.price}</td>
            <td>{props.date}</td>
            <td><a href="#">Купить билет</a></td>
        </tr>
        </tbody>
    )
}

function Content(props){
    return (
        <div className="content">
            <h2>Популярные рейсы</h2>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Откуда</th>
                    <th scope="col">Куда</th>
                    <th scope="col">Номер рейса</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Купить билет</th>
                </tr>
                </thead>
            <AirlineList whence="Бишкек" where="Москва" number="548" price="154$" date="01.05.2018" />
            <AirlineList whence="Бишкек" where="Ош" number="513" price="54$" date="04.11.2018" />
            <AirlineList whence="Бишкек" where="Новосибирск" number="425" price="102$" date="04.08.2018" />
            </table>
        </div>
    )
}

export default Content
