import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);

  const { _id, title, img, price, description } = services;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const email = user.email || "Unregistered";
    const review = form.review.value;

    const reviews = {
      service: _id,
      name: title,
      customerName: name,
      email,
      review,
    };

    fetch("https://all-cleaner-service-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("review added successfully");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://all-cleaner-service-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
    console.log(allReviews);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 p-10">
      <div className="card card-compact w-96 h-[70%] bg-base-100 shadow-xl">
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
              <button className="btn btn-primary">Rate Us! </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl mb-3"> Review on us </h2>
        {user?.email ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="grid grid cols-1 lg:grid-cols-2 gap-4">
                <input
                  name="Name"
                  type="text"
                  placeholder=" Name"
                  className="input input-bordered w-full"
                />

                <input
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <textarea
                name="review"
                className="textarea textarea-bordered h-24 w-full mt-3"
                placeholder="Your Review"
                required
              ></textarea>
              <input className="btn" type="submit" value="Drop Your Review" />
            </form>
          </>
        ) : (
          <>
            <Link to="/login" className="text-xl mb-3 text-orange-500">
              Click here to Login First !
            </Link>
          </>
        )}
      </div>

      <div className="ml-5 ">
        <h2 className="text-2xl mb-3">Our Reviews</h2>{" "}
        {allReviews.map((allreview) => (
          <div className=" bg-blue-400 p-5 ">
            {" "}
            <h2 className="text-xl">{allreview.name}</h2>
            <h2 className="">{allreview.review}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
// {allReviews.map((allreview) => (
//   <p>{allreview.name}</p>
// ))}
