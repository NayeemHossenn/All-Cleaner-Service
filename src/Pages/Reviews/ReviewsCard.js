import React, { useEffect, useState } from "react";

const ReviewsCard = ({ rvw, handleDelete, handleEdit }) => {
  const { name, review, service, _id } = rvw;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://all-cleaner-service-server.vercel.app/allservices/${service}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service]);

  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleEdit(_id)} className="btn">
            Edit Review
          </button>
          <button onClick={() => handleDelete(_id)} className="btn">
            Delete Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
