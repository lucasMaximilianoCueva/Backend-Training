import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const postUrl = "http://localhost:5000/api/products";

const admin = true;

function Add() {
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
        <form action={postUrl} method="post" autoComplete="off">
          <div className="loginBody">
            <div className="form-group">
              <div  className="input-group mb-3">
                <input type="text" id="title" className="form-control form-control-lg" name="title" placeholder="Title"
                  required />
                <div className="input-group-append">
                  <span className="input-group-text p-3"><i className="fa fa-user"></i></span>
                </div>
              </div>
            </div>
            <div className="form-group">
            <div  className="input-group mb-3">
                <input type="text" id="description" className="form-control form-control-lg" name="description" placeholder="Description"
                  required />
                <div className="input-group-append">
                  <span className="input-group-text p-3"><i className="fa fa-user"></i></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input type="url" id="thumbnail" className="form-control form-control-lg" name="thumbnail"
                  placeholder="Url Image" required />
                <div className="input-group-append">
                  <span className="input-group-text p-3"><i className="fa fa-lock"></i></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input type="number" id="price" className="form-control form-control-lg" name="price" placeholder="Price"
                  required />
                <div className="input-group-append">
                  <span className="input-group-text p-3"><i className="fa fa-lock"></i></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input type="number" id="stock" className="form-control form-control-lg" name="stock" placeholder="Stock"
                  required />
                <div className="input-group-append">
                  <span className="input-group-text p-3"><i className="fa fa-lock"></i></span>
                </div>
              </div>
            </div>
            <div className="text-right form-group">
              <Link href="#">Help ?</Link>
            </div>
            <div className="form-group">
              <input  type="submit" id="sendButton" className="btn btn-block btn-lg btn-primary" value="Save"></input>
            </div>
          </div>
        </form>
      </div>
      ) }
    
      </div>

        
    )
}

export default Add;