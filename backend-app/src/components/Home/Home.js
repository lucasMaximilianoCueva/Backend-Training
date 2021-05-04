import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return(
        <div class="container">
      <div class="loginForm col-lg-5 col-md-8 col-sm-8 p-4">
        <div class="loginHeader pt-3 pb-4">
          <h4>Product Form</h4>
          <p>Type a Product!</p>
        </div>
        <form action="/api/products" method="post">
          <div class="loginBody">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="text"
                  id="title"
                  class="form-control form-control-lg"
                  name="title"
                  placeholder="Name"
                  required
                />
                <div class="input-group-append">
                  <span class="input-group-text p-3"
                    ><i class="fa fa-user"></i
                  ></span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="number"
                  id="price"
                  class="form-control form-control-lg"
                  name="price"
                  placeholder="Price"
                  required
                />
                <div class="input-group-append">
                  <span className="input-group-text p-3"
                    ><i className="fa fa-lock"></i
                  ></span>
                </div>
              </div> </div
            ><div className="form-group">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="thumbnail"
                  className="form-control form-control-lg"
                  name="thumbnail"
                  placeholder="Url Image"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text p-3"
                    ><i className="fa fa-lock"></i
                  ></span>
                </div>
              </div>
            </div>
            <div className="text-right form-group">
              <Link>Help ?</Link>
            </div>
            <div class="form-group">
              <button class="btn btn-block btn-lg btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
export default Home;
