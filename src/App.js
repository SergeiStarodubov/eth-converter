import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eth: null,
      rub: null
    };
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(response => response.json())
      .then(data => this.setState({eth: data}));

    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(data => this.setState({rub: data}));
  }
  render() {
    let price = this.state.eth === null? 'подождите...' : `ETH ${this.state.eth[0].price_usd} usd`;
    let usd = (this.state.rub === null)? 'подождите...' : this.state.rub;
    let usdToRub = usd.Valute === undefined? '' : usd.Valute.USD.Value;

    return <div>{price}
      <p>price USD : {usdToRub}</p>
    </div>
  }
}

export default App;
