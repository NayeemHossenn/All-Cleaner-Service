import React from "react";
import img from "../../../assets/others/istockphoto.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" className=" rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            We are Experienced <br />
            In this field!
          </h1>
          <p className="py-6">
            We are proud to offer skilled house cleaning services and to employ
            residential housekeepers who take pride in providing excellent
            service. Every member of our team is completely trained on each step
            of our elaborate cleanup plans after passing an extensive background
            check
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
