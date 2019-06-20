import React, { Component } from 'react';
import './App.css';

class Square extends Component {

//method to take the prop sent from the method on Board, and update appropriate cells with that info
    render(){
      return (
        <button className = "button" onClick={()=>this.props.handleClick()}>{this.props.value}
        </button>
      )
  }
}

export default Square;