import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import GetStarted from "../GetStarted/GetStarted";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
