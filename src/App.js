import React from 'react';
import Info from './components/info.js';
import Panel from './components/Panel.js';
import Style from './App.css';

class App extends React.Component {
  state = {
    eth: undefined,
    rub: undefined
  };

  componentDidMount() {
    
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(response => response.json())
      .then(data => this.setState({eth: data}))
      .catch(() => {this.setState({rub: 'проблемы с сервером, перезагрузите страницу...'})});

    fetch('http://free.currencyconverterapi.com/api/v5/convert?q=USD_RUB&compact=y')
      .then(response => response.json())
      .then(data => {this.setState({rub: data})})
      .catch(() => {this.setState({rub: 'проблемы с сервером, перезагрузите страницу...'})});
  }
  render() {
    const hightClient = (document.documentElement.clientHeight/4) + 'px';
    document.querySelector('#root').style.marginTop = hightClient;

    const eth = this.state.eth === undefined? 'загрузка...' : `1 ETH: ${this.state.eth[0].price_usd} $`;
    const usd = this.state.rub === undefined? 'загрузка...' : this.state.rub.USD_RUB.val;

    return (
      <>
      <Info eth = {eth} usd = {usd}/>
      <Panel eth = {this.state.eth === undefined? '' : this.state.eth[0].price_usd} usd = {usd}/>
      </>
    );
  }
}

export default App;
