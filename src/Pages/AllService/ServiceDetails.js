import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  return (
    <div>
      <h2>{services.description}</h2>
    </div>
  );
};

export default ServiceDetails;
