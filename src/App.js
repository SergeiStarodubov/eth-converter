import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(response => response.json())
      .then(data => this.setState({data: data}));
  }
  render() {
    let price = this.state.data === null? 'подождите...' : `ETH ${this.state.data[0].price_usd} usd`;
    return <div>{price}</div>
  }
}

export default App;
