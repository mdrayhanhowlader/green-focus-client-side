import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const photoDetails = useLoaderData();
  const { img, name, details, price } = photoDetails;

  const handleReview = () => {};

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img className="w-full" src={img} alt="" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <h5 className="font-semibold">Price: ${price}</h5>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Give A Review!!</button>
          </div>
        </div>
      </div>

      <div className="review-section w-4/5 mx-auto my-12">
        <h2 className="font-bold text-3xl text-cyan-500">Reviews</h2>
      </div>
    </div>
  );
};

export default Details;
