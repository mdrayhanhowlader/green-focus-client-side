import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [deletedItems, setDeletedItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://wild-life-photography-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [deletedItems]);
  const getReviews = reviews.filter((rv) => rv.email === user?.email);
  console.log(getReviews);

  const handleDeleteReview = (id) => {
    fetch(`https://wild-life-photography-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = reviews.filter((dv) => dv._id !== id);
          setDeletedItems(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-8 text-cyan-500 font-bold">
        My Reviews
      </h2>
      <div className="w-4/5 mx-auto mb-40 mt-12">
        {getReviews.map((review) => (
          <>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{review.name}</td>
                    <td>{review.review}</td>
                    <td>
                      <Link to={`/edit/${review?._id}`}>
                        <button className="btn btn-outline btn-info">
                          Update
                        </button>
                      </Link>
                      <button className="btn btn-square btn-outline">
                        <svg
                          onClick={() => handleDeleteReview(review._id)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
