import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeService = ({ service }) => {
  const { _id, img, name, details, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>
        {/* <img className="w-full" src={img} alt="" /> */}
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
