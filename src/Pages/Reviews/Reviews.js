import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  //const url = `http://localhost:5000/reviews?email=${user?.email}`;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl text-center mb-8 text-blue-400"> Your Review </h2>
      <div className="grid gap-3 grid-cols-3 mb-4">
        {reviews.map((rvw) => (
          <ReviewsCard key={rvw._id} rvw={rvw}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
