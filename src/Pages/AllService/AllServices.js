import React, { useEffect, useState } from "react";

import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://all-cleaner-service-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allService.map((services) => (
        <AllServiceCard key={services._id} services={services}></AllServiceCard>
      ))}
    </div>
  );
};

export default AllServices;
