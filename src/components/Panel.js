import React from 'react';
import Style from '../styles/panel.css';

class Panel extends React.Component {
  constructor() {
    super();
    this.fiat = React.createRef();
  }
  state = {
    block: 'none',
    currency: 'USD',
    inputETH: '',
    inputFiat: ''
  }

  chooseCurrency = (e) => {
    window.onclick = (e) => {
      if (!e.target.classList.contains('fiat')) {
        this.setState({block: 'none'});
    } else {
      this.setState({block: 'block'});
      }
    }
  }

  putFiatInPanel = (e) => {
    this.state.currency = e.target.innerHTML;
    this.setState({currency: this.state.currency});
    window.onclick = (e) => {
      e.preventDefault();
    }
    this.setState({block: 'none'});
    if (this.state.currency === 'RUB') {
      this.state.inputFiat = (+this.state.inputETH)*(+this.props.eth* +this.props.usd);
      this.setState({inputFiat: this.state.inputFiat.toFixed(2)});
    } else {
      this.state.inputFiat = (+this.state.inputETH)*(+this.props.eth);
      this.setState({inputFiat: this.state.inputFiat.toFixed(2)});
    }
  }

  handleInputETH = (e) => {
    if (isNaN(e.target.value) === false) {
      if (this.state.currency === 'USD') {
        this.state.inputETH = e.target.value;
        this.setState({inputETH: this.state.inputETH});
        this.state.inputFiat = (+this.state.inputETH)*(+this.props.eth);
        this.setState({inputFiat: this.state.inputFiat.toFixed(2)});
      } else {
        this.state.inputETH = e.target.value;
        this.setState({inputETH: this.state.inputETH});
        this.state.inputFiat = (+this.state.inputETH)*(+this.props.eth* +this.props.usd);
        this.setState({inputFiat: this.state.inputFiat.toFixed(2)});
      }
    }
  }

  handleInputFiat = (e) => {
    if (isNaN(e.target.value) === false) {
      if (this.state.currency === 'USD') {
        this.state.inputFiat = e.target.value;
        this.setState({inputFiat: this.state.inputFiat});
        this.state.inputETH = (+this.state.inputFiat)/(+this.props.eth);
        this.setState({inputETH: this.state.inputETH.toFixed(5)});
      } else {
        this.state.inputFiat = e.target.value;
        this.setState({inputFiat: this.state.inputFiat});
        this.state.inputETH = (+this.state.inputFiat)/(+this.props.eth* +this.props.usd);
        this.setState({inputETH: this.state.inputETH.toFixed(5)});
      }
    }
  }

  render() {

    return (
      <div className = 'panel'>

        <p>
          <input type="text" value = {this.state.inputETH} onChange = {this.handleInputETH} /><span>ETH</span> <input type="text" onChange = {this.handleInputFiat} value = {this.state.inputFiat} />
          <span className = 'fiat' ref = {this.fiat} onClick = {this.chooseCurrency}>{this.state.currency}</span>
        </p>

        <div className = 'block fiat' style = {{display: this.state.block}}>
          <p className = 'fiat' onClick = {this.putFiatInPanel}>USD</p>
          <p className = 'fiat' onClick = {this.putFiatInPanel}>RUB</p>
        </div>

      </div>
    );
  }
}

export default Panel;
