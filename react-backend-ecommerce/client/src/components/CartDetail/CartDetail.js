import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

function CartDetail() {
  const [itemCartData, setItemCartData] = useState([]);
  const { id } = useParams();
  const url = `/api/cart/${id}`;

  useEffect(() => {
    getWithFetch();
  }, []);

  const getWithFetch = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setItemCartData(jsonData);
  };

  const deleteProd = (e) => {
    fetch(url, {
      method: "DELETE",
    });
  };



  return (
<div>
    {itemCartData.error ? (
        <div>
        <h1>Empty Cart</h1>
    </div>
      ) : (
      <div>
    
    <section  className="mb-5 mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-3 ">
          <div>
            <div className="row product-gallery mx-1">
              <div className="col-12 mb-0">
                <figure className="view overlay rounded z-depth-1 main-img">
                  <Link href="#" data-size="710x823">
                    <img
                      src=''
                      alt={itemCartData.title}
                      className="img-fluid z-depth-1"
                    ></img>
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5>{itemCartData.title}</h5>
          <p className="mb-2 text-muted text-uppercase small">
            {itemCartData.category}
          </p>
          <p>
            <span className="mr-1">
              <strong>${itemCartData.price}</strong>
            </span>
          </p>
          <p className="pt-1">{itemCartData.description}</p>
          <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
              <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Id</strong>
                  </th>
                  <td>{itemCartData.id}</td>
                </tr>
                <tr>
                  <th className="pl-0 w-25" scope="row">
                    <strong>Timestamp</strong>
                  </th>
                  <td>{itemCartData.timestamp}</td>
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
        <Link to={`/update/${itemCartData.id}`}>
          <button className="btn btn-warning" type="">
            Update
          </button>
        </Link>
        <Link >
          <button className="btn btn-primary" type="">
            Buy
          </button>
        </Link>
      </div>
       
    </section>
  
    </div> )}
    </div>
  )
}

export default CartDetail;