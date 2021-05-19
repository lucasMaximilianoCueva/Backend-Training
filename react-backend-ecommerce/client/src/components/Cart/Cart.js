import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Cart.css'

function Cart () {
    const [cart, setCart] = useState([]);
    const url = "/api/cart"

    useEffect(() => {
        getWithFetch();
      }, []);

      const getWithFetch = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setCart(jsonData);
      };  

      const deleteProd = (u) => {
        fetch(`/api/cart/${u}`, {
          method: "DELETE",
        });
        const newCart = cart.filter((item) => item.id !== u);
        setCart(newCart)
      };

    return (

  <div>
        <h2>Cart</h2>
        {cart.length < 1 || cart.error ? (
          <div>
            <h2>No Products</h2>
          </div>
        ) : (
        
        <div className="container table-responsive py-5"> 
<table className="table table-bordered table-hover">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product</th>
      <th scope="col">Code</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Delete</th>
    </tr>
  
  </thead>
  <tbody>
  {cart.map(prod =>
    <tr key={prod.id}>
      <th scope="row">{prod.product.id}</th>
      <td>{prod.product.title}</td>
      <td>{prod.product.code}</td>
      <td>${prod.product.price}</td>
      <td><img src={prod.product.thumbnail} className="img-thumbnail" alt="{{this.title}}"></img></td>
      <td><Link><button onClick={() => deleteProd(prod.id)} className="btn btn-danger"> Delete</button></Link></td> 
    </tr>
  )}
  </tbody>
</table>
</div>
        )}
      </div>
      
    );
  }


export default Cart;


