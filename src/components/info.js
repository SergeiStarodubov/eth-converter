import React from 'react';
import Img from '../images/eth.png';

class Info extends React.Component {
  render() {
    return (
      <div className = 'info'>
        <img src = {Img}/>
        <p>{this.props.eth}</p>
        <p>price USD : {this.props.usd}</p>
      </div>
    );
  }
}

export default Info;
