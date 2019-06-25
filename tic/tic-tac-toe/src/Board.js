import React, { Component } from 'react';
import Square from './Square'
import ScoreBoard from './ScoreBoard'
import './App.css';

class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                squares: Array(9).fill(null),
                xTurn: true,
                oWins: 0,
                xWins: 0
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
                    index = {i}
                    handleClick = {this.handleClick}
                />
    }

    handleClick = (i) => {
        const newSquares = this.state.squares.slice()
        let newTurn = this.state.xTurn
        let oWins = this.state.oWins
        let xWins = this.state.xWins
        
        if(newSquares[i] === null && !this.winner(newSquares)){
            if(newTurn === true){
                newSquares[i] = 'X'
                newTurn = false
            } else {
                newSquares[i] = 'O'
                newTurn = true
            }
        }
        
        if(this.winner(newSquares) || newSquares.indexOf(null) === -1){
            if(this.winner(newSquares) === 'X'){
                let winner = this.winner(newSquares)
                xWins++
                setTimeout(function() {alert(`${winner} wins!`)}, 250)
            } else if(this.winner(newSquares) === 'O') {
                let winner = this.winner(newSquares)
                oWins++
                setTimeout(function() {alert(`${winner} wins!`)}, 250)
            } 
            
            setTimeout(function() {alert("Reset for new board!")}, 250)
        }
        
        this.setState({squares: newSquares, xTurn: newTurn, xWins: xWins, oWins: oWins})
    }
    
    resetBoard = () => {
        let resetArr = Array(9).fill(null)
        let resetTurn = true
        this.setState({squares: resetArr, xTurn: resetTurn})
    }

    render(){
        const status = `It is ${this.state.xTurn ? 'X' : 'O'}'s turn`
        const {squares, oWins, xWins} = this.state
      return (
          <div className="page">
            <div className = "status" >
                {status}
            </div>
            <div className="Board" >
                {squares.map((value, index) => {
                    return <div>
                                {this.renderSquare(index)}
                           </div>
                })}
            </div>
            <scoreBoard
                oWins = {oWins}
                xWins = {xWins}
            />
            <button className="reset" onClick={this.resetBoard}>Reset the Board</button>
          </div>
      )
    }
}

export default Board;