import React, { Component } from 'react';
import './App.css';

export default class ScoreBoard extends Component {

    render(){
      return (
        <div className = "Score">
          <h2
            className = "xWins">
            xWins: {this.props.xWins} 
          </h2>
          <h2
            className = "oWins">
            oWins: {this.props.oWins}
          </h2>
        </div>
      )
  }
}

