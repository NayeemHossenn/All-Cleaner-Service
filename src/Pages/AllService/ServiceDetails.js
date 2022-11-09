import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const services = useLoaderData();

  const { title, img, price, description } = services;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl">Price :${price}</p>
        <p>{description} </p>
        <div className="card-actions justify-end">
          <Link to={`/allservices/${services._id}`}>
            {" "}
            <button className="btn btn-primary">See Details </button>
          </Link>
          <button className="btn btn-primary">
            {" "}
            <Link to="/allservices">See All Service</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
