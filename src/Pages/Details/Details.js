import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Details = () => {
  const photoDetails = useLoaderData();
  const { _id, img, name, details, price, seller, service } = photoDetails;
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);

  // console.log(allReviews);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.comment.value;
    // console.log(comment);
    const reviews = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      review: review,
      service: service,
    };
    fetch("https://wild-life-photography-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
    form.reset();
  };

  useEffect(() => {
    fetch("https://wild-life-photography-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        // console.log(data);
      });
  }, [allReviews]);

  const selectedReviews = allReviews.filter((rv) => rv.service === service);

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
      <div className="reviews w-4/5 mx-auto mb-40">
        {selectedReviews.map((sr) => (
          <>
            <div key={sr.service} className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Edit/Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={sr?.photo} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{sr?.name}</div>
                          <div className="text-sm opacity-50">{sr?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{sr?.review}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Details;
