import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  

  return (
    <>
      <Navbar />
      <div className="my-5">
        <div className="mb-5">
          <h1 className="text-center"> Login </h1>
        </div>
        <div className="container Sihnup_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto" >
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="password"
                    placeholder="****"
                  />
                </div>
                
                <div class="col-12">
                  <NavLink to="/dashboard">
                      <button class="btn btn-outline-primary" type="submit">
                      Submit
                      </button>
                  </NavLink>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;