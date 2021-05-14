import React, { Component } from 'react';
import './ItemListContainer.css';

class ItemListContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({products}, () => console.log('Products fetched...', products)));
  }

 render() {
    return (
        <div class="container">
            <div class="row">
            {this.state.products.map(product => 
                <div key={product.id} class="col-md-3 col-sm-6">
                    <div class="product-grid2">
                        <div class="product-image2">
                            <a href="#">
                                <img src={product.thumbnail} alt={product.title}/> 
                            </a>
                            <ul class="social">
                                <li><a href="http://localhost:8080/products/view/{{this.id}}" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                                <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <div class="product-content">
                                <h3 class="title"><a href="#">{product.title}</a></h3> <span class="price">${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
 }
}

 export default ItemListContainer;