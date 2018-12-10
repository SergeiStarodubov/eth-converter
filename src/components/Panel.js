import React from 'react';
import Style from '../styles/panel.css';

class Panel extends React.Component {
  constructor() {
    super();
    this.fiat = React.createRef();
  }
  state = {
    block: 'none',
    currency: 'RUB'
  }

  chooseCurrency = () => {
    window.onclick = (e) => {
      if (!e.target.classList.contains('fiat')) {
        this.setState({block: 'none'});
    } else {
      this.setState({block: 'block'});
      }
    }
  }
  putFiatInPanel = (e) => {
    this.setState({currency: e.target.innerHTML});
  }

  componentDidMount() {

  }
  render() {

    return (
      <div className = 'panel'>
        <p>
          <input type="text"/><span>ETH</span> <input type="text"/>
          <span className = 'fiat' ref = {this.fiat} onClick = {this.chooseCurrency}>{this.state.currency}</span>
        </p>
      <div className = 'block fiat' style = {{display: this.state.block}}>
        <p className = 'fiat' onClick = {this.putFiatInPanel}>USD</p>
        <p className = 'fiat' onClick = {this.putFiatInPanel}>RUB</p></div>
      </div>
    );
  }
}

export default Panel;
