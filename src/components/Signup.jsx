import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {
  

  return (
    <>
      <Navbar />
      <div className="my-5">
        <div className="mb-5">
          <h1 className="text-center"> Sign Up </h1>
        </div>
        <div className="container Sihnup_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto" >
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    
                    name="fullname"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    
                    name="phone"
                    placeholder="mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Set Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    
                    name="password"
                    placeholder="****"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    
                    name="confirmpassword"
                    placeholder="****"
                  />
                </div>
                <div className="col-12">
                  <NavLink to="/dashboard">
                      <button className="btn btn-outline-primary" type="submit">
                      Submit form
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

export default Signup;