import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Details = () => {
  const photoDetails = useLoaderData();
  const { _id, img, name, details, price, seller, service } = photoDetails;
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = event.target.comment.value;
    // console.log(comment);
    const reviews = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      review: review,
      service: service,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        // console.log(data);
      });
  }, []);

  const selected = allReviews.filter((rv) => rv._id !== _id);
  console.log("get filter", selected);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img className="w-full" src={img} alt="" />
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{name}</h2>
          <p>{details}</p>
          <h5 className="font-semibold">Price: ${price}</h5>
          <h6>Taken By:{seller}</h6>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Give A Review</button>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Comment"
              className="input input-bordered"
              name="comment"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div className="review-section w-4/5 mx-auto my-12">
        <h2 className="font-bold text-3xl text-cyan-500">Reviews</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Details;
