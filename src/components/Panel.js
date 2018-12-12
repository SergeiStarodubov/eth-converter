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
    if (this.state.currency === 'USD') {
      this.state.currency = 'RUB';
      this.setState({currency: this.state.currency});
      this.state.inputFiat = (+this.state.inputETH)*(+this.props.eth* +this.props.usd);
      this.setState({inputFiat: this.state.inputFiat.toFixed(2)});
    } else {
      this.state.currency = 'USD';
      this.setState({currency: this.state.currency});
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

    const css = {
      fontSize: '20px',
      width: '175px',
      paddingLeft: '5px',
      height: '25px',
      marginRight: '5px',
      color: '#343434',
      boxShadow: '0px 0px 10px 1px rgba(255,255,255,1)'
    };

    return (

      <div className = 'panel'>

        <p>
          <input className = 'input' type="text" value = {this.state.inputETH} onChange = {this.handleInputETH} style = {css} /><span id = 'eth'>ETH</span> <input className = 'input' type="text" onChange = {this.handleInputFiat} value = {this.state.inputFiat} style = {css}/>
          <span id = 'usd' className = 'fiat' ref = {this.fiat} onClick = {this.chooseCurrency}>{this.state.currency}</span>
        </p>

      </div>
    );
  }
}

export default Panel;
