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
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Review</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            {getReviews.map((review) => (
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={review?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{review?.name}</div>
                        <div className="text-sm opacity-50">
                          {review?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{review?.review}</td>
                  <td>
                    <Link
                      to={`/edit/${review?._id}`}
                      className="text-green-700 mr-2"
                    >
                      Update
                    </Link>
                    <Link
                      onClick={() => handleDeleteReview(review._id)}
                      className="text-red-800"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
