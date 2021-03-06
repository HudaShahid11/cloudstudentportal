import React from "react";

const Card = (props) => {
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
            <a href="http://kewo.org/courses" className="btn btn-outline-primary">
              {props.btntext}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;