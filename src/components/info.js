import React from 'react';
import Img from '../images/eth.png';
import Style from '../styles/info.css';

class Info extends React.Component {
  render() {
    return (
      <div className = 'info'>
        <img id = 'logo' src = {Img}/>
        <p className = 'inputs'>{this.props.eth}</p>
        <p className = 'inputs'>1 USD: {this.props.usd} RUB</p>
      </div>
    );
  }
}

export default Info;
