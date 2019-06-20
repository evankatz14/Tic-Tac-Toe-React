import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                squares: Array(9).fill(null)
            }
    }

    updateStatus = (squares) => {
        this.setState({squares})
        console.log(this.state.squares)
    }

    render(){
        return (
            <div className = "main">
                <Board
                    squares = {this.state.squares}
                    updateStatus = {this.updateStatus}
                />
            </div>
        )
    }
}



export default App;
