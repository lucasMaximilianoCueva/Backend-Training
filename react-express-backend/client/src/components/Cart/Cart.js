import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(cart => this.setState({cart}, () => console.log('Cart fetched...', cart["products"])));
  }

  render() {
    return (

  <div>
        <h2>Cart</h2>
        <ul>
        {this.state.cart.map(prod => 
          <li key={prod.id}>id = {prod.id} timestamp = {prod.timestamp}</li>
        )}
        </ul>
      </div>
      
    );
  }
}

export default Cart;


