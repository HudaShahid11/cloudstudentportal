import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Navbar from './Navbar';

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center"> Top Courses </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} btntext={"Check Now"}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;