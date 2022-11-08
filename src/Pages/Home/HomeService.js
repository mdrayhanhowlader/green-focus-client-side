import React from "react";
import { Link } from "react-router-dom";

const HomeService = ({ service }) => {
  const { _id, img, name, details, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
        <h5 className="font-semibold">Price: ${price}</h5>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
