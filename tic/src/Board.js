import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                squares: Array(9).fill(null),
                xTurn: true
            }
    }

    winner = (squares) => {
        const winningCombo = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,4,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        ]
        for (let j = 0; j < winningCombo.length; j++) {
            const [a,b,c] = winningCombo[j]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }
    //method- based on onclick activity and location of that activity, fire this method.
    renderSquare = (i) => {
        return <Square
                    value = {this.state.squares[i]}
                    handleClick = {() => this.handleClick(i)}
                />
    }

    handleClick = (i) => {
        const newSquares = this.state.squares.slice()
        let newTurn = this.state.xTurn
        if(newSquares[i] === null && !this.winner(newSquares)){
            if(newTurn === true){
                newSquares[i] = 'X'
                newTurn = false
            } else {
                newSquares[i] = 'O'
                newTurn = true
            }
        }
        if(this.winner(newSquares)){
            alert(this.winner(newSquares)+" wins!")
        }
        if (newSquares.indexOf(null) === -1){
            alert("Reset for new board!")
        }
        // } else if ()
        this.setState({squares: newSquares, xTurn: newTurn})
    }

    // handleChange(){
    //     this.props.updateStatus()
    // }
    resetBoard = () => {
        let resetArr = Array(9).fill(null)
        let resetTurn = true
        this.setState({squares: resetArr, xTurn: resetTurn})
    }
    //which updates updates the array (Board state)
    //then this back to square to update that cell/squares

    render(){
      return (
          <div className="page">
            <div className = "status" >
            </div>
            <div className="Board" >
                <div
                    className="cell">
                    {this.renderSquare(0)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(1)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(2)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(3)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(4)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(5)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(6)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(7)}
                </div>
                <div
                    className="cell">
                    {this.renderSquare(8)}
                </div>
             </div>
                    <button className="reset" onClick={this.resetBoard}>Reset the Board</button>
          </div>
      )
    }
}

export default Board;
