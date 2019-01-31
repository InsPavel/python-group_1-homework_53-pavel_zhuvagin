import React, { Component } from 'react';
import './App.css';
import Loto from './Loto/Loto.js';

class App extends Component {

    state = {
        random: []
    };

    handleClick = () => {
        let min = 5;
        let max = 36;
        let gen = () => {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        };

        let arr = [];

        let inArr = (val) => {
            for(let i=0; i <= arr.length; i++){
                if(arr[i] === val)
                    return true;
            }
        };

        while(arr.length < 5){
            let tmp = gen();
            if(inArr(tmp))
                continue;
            arr.push(tmp)
        }

        function compareNumeric(a, b) {
          return a - b;
        }

        arr.sort(compareNumeric);

        this.setState({
            random: arr
        });
        console.log(this.state.random);
    };

    render() {
        return (
        <div className="container">
            <button onClick={this.handleClick}>Новые числа</button>
            <div className="number">
                <Loto number={this.state.random[0]}/>
                <Loto number={this.state.random[1]}/>
                <Loto number={this.state.random[2]}/>
                <Loto number={this.state.random[3]}/>
                <Loto number={this.state.random[4]}/>
            </div>
        </div>
        )
    }
}

export default App;
