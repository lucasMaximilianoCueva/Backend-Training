import React, { useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Update() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { id } = useParams();
  const url = `http://localhost:3000/api/products/${id}`;
  const admin = true;
  const data = {
    title: title,
    description: description,
    price: price,
    stock: stock,
    thumbnail: thumbnail,
  };

  const updateProd = (e) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  return (
    <div>
      {!admin ? (
        <h1>ADMIN FALSE</h1>
      ) : (
        <div className="loginForm col-lg-5 col-md-8 col-sm-8 p-4">
          <div className="loginHeader pt-3 pb-4">
            <h4>Product Form</h4>
            <p>Type a Product!</p>
          </div>
          <form autoComplete="off">
            <div className="loginBody">
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    id="title"
                    className="form-control form-control-lg"
                    name="title"
                    placeholder="Name"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text p-3">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={(event) => setDescription(event.target.value)}
                    type="text"
                    id="description"
                    className="form-control form-control-lg"
                    name="description"
                    placeholder="Description"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text p-3">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={(event) => setPrice(event.target.value)}
                    type="number"
                    id="price"
                    className="form-control form-control-lg"
                    name="price"
                    placeholder="Price"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text p-3">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={(event) => setStock(event.target.value)}
                    type="number"
                    id="stock"
                    className="form-control form-control-lg"
                    name="stock"
                    placeholder="Stock"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text p-3">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={(event) => setThumbnail(event.target.value)}
                    type="url"
                    id="thumbnail"
                    className="form-control form-control-lg"
                    name="thumbnail"
                    placeholder="Url Image"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text p-3">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right form-group">
                <Link href="#">Help ?</Link>
              </div>
              <div className="form-group">
                <Link to="/products">
                  <input
                    onClick={updateProd}
                    type="submit"
                    id="sendButton"
                    className="btn btn-block btn-lg btn-primary"
                    value="Save"
                  ></input>
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
