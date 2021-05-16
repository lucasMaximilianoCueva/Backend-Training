import React, { Component } from 'react';
import './ItemListContainer.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
        <div>
        {this.state.error  ? (
            <div>
                <h1>No Products</h1>
            </div>
            
        ) : (
            <div className="container">
            <div className="row">
            {this.state.products.map(product => 
                <div key={product.id} className="col-md-3 col-sm-6">
                    <div className="product-grid2">
                        <div className="product-image2">
                            <Link href="#">
                                <img src={product.thumbnail} alt={product.title}/> 
                            </Link>
                            <ul className="social">
                                <li><Link to='/products/10' data-tip="Quick View"><i className="fa fa-eye"></i></Link></li>
                                <li><Link href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                            <div className="product-content">
                                <h3 className="title"><Link href="#">{product.title}</Link></h3> <span className="price">${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
       
        )}
        </div>
        
        
    )
 }
}

 export default ItemListContainer;