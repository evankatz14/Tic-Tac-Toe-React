import React, { Component } from 'react';
import './App.css';

class Square extends Component {

    handleChange = () => {
      this.props.handleClick(this.props.index)
    }

    render(){
      return (
        <button className = "button" onClick={this.handleChange}>{this.props.value}
        </button>
      )
  }
}

export default Square;