import React from "react";
import web from "./images/hero-img.png"
import Common from "./Common";
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Common
        name="Enhance your skills with"
        imgsrc={web}
        visit="/signup"
        btname="Get Started"
      />
    </>
  );
};

export default Home;