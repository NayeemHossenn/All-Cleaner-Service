import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewsCard from "./ReviewsCard";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://all-cleaner-service-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const confirm = window.confirm("Are You want to delete");
    if (confirm) {
      fetch(`https://all-cleaner-service-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = reviews.filter((rev) => rev._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleEdit = (_id) => {
    fetch(`https://all-cleaner-service-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-8 text-blue-400"> Your Review </h2>

      <div className="grid gap-3 grid-cols-3 mb-4">
        {reviews.map((rvw) => (
          <ReviewsCard
            key={rvw._id}
            rvw={rvw}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          ></ReviewsCard>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Reviews;
