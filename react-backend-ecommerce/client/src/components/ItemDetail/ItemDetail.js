import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

function ItemDetail() {
  const [itemData, setItemData] = useState([]);
  const { id } = useParams();
  const url = `http://localhost:5000/api/products/${id}`;
  const urlCart = "/api/cart";
  const data = {
    "product": {
      "title": itemData.title,
      "timestamp": itemData.timestamp,
      "code": itemData.code,
      "description": itemData.description,
      "price": itemData.price,
      "thumbnail": itemData.thumbnail,
      "id": itemData.id,
      "stock": itemData.stock
    }
  }

  useEffect(() => {
    getWithFetch();
  }, []);

  const getWithFetch = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setItemData(jsonData)
  };

  console.log(itemData)

  const deleteProd = (e) => {
    fetch(url, {
      method: "DELETE",
    });
  };

  const addToCart = () => {
    fetch(urlCart, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
    <h1>Detail Product</h1>
    {itemData.length || itemData.error ? (
      <div>
      <h2>No Products</h2>
    </div>
    ) : (
    <section className="mb-5 mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-3 ">
          <div>
            <div className="row product-gallery mx-1">
              <div className="col-12 mb-0">
                <figure className="view overlay rounded z-depth-1 main-img">
                  <Link href="#" data-size="710x823">
                    <img
                      src={itemData.thumbnail}
                      alt={itemData.title}
                      className="img-fluid z-depth-1"
                    ></img>
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5>{itemData.title}</h5>
          <p className="mb-2 text-muted text-uppercase small">
            {itemData.category}
          </p>
          <p>
            <span className="mr-1">
              <strong>${itemData.price}</strong>
            </span>
          </p>
          <p className="pt-1">{itemData.description}</p>
          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Code</strong>
                  </th>
                  <td>{itemData.code}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Stock</strong>
                  </th>
                  <td>{itemData.stock}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Id</strong>
                  </th>
                  <td>{itemData.id}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button onClick={deleteProd} className="btn btn-dark" type="">
            Delete
          </button>
        </Link>
        <Link to={`/update/${itemData.id}`}>
          <button className="btn btn-warning" type="">
            Update
          </button>
        </Link>
        <Link to='/cart'>
          <button onClick={addToCart} className="btn btn-primary" type="">
            Add to Cart
          </button>
        </Link>
      </div>
    </section>

)}</div>
  );
}

export default ItemDetail;
