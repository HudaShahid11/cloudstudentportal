import React from "react";
import { NavLink } from "react-router-dom";

const Dcard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              {props.desc}
            </p>

            <NavLink to="/cmaterial">
              <button className="btn btn-outline-primary" type="submit">
              {props.btntext}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dcard;