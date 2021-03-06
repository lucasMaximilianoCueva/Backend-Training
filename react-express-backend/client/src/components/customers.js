import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
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
      <div class="container">
  <div class="loginForm col-lg-5 col-md-8 col-sm-8 p-4">
    <div class="loginHeader pt-3 pb-4">
      <h4>Product Form</h4>
      <p>Type a Product!</p>
    </div>
    <form action="/api/products" method="post" autocomplete="off">
      <div class="loginBody">
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="text" id="title" class="form-control form-control-lg" name="title" placeholder="Name"
              required />
            <div class="input-group-append">
              <span class="input-group-text p-3"><i class="fa fa-user"></i></span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="number" id="price" class="form-control form-control-lg" name="price" placeholder="Price"
              required />
            <div class="input-group-append">
              <span class="input-group-text p-3"><i class="fa fa-lock"></i></span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <input type="url" id="thumbnail" class="form-control form-control-lg" name="thumbnail"
              placeholder="Url Image" required />
            <div class="input-group-append">
              <span class="input-group-text p-3"><i class="fa fa-lock"></i></span>
            </div>
          </div>
        </div>
        <div class="text-right form-group">
          <a href="#">Help ?</a>
        </div>
        <div class="form-group">
          <input type="submit" id="sendButton" class="btn btn-block btn-lg btn-primary" value="Save"></input>
        </div>
      </div>
    </form>
  </div>

  <div id='products'></div>

  <div>
        <h2>Customers</h2>
        <ul>
        {this.state.cart.map(prod => 
          <li key={prod.id}>id = {prod.id} timestamp = {prod.timestamp}</li>
        )}
        </ul>
      </div>
  </div >
      
    );
  }
}

export default Customers;


