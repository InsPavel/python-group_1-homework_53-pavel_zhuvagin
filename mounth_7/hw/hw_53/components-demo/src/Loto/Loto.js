import React, { Component } from 'react';
import './Loto.css';

class Loto extends Component {
    render() {
        return (
            <p>{this.props.number}</p>
        );
    }
}

export default Loto;
