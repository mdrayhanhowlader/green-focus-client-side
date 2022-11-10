import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
        </div>
      </div>
      <div>
        {user?.uid ? (
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
        ) : (
          <div className="w-4/5 mx-auto mt-8">
            <Link className="text-green-500 font-semibold text-lg" to="/login">
              Want to place a Review? Please Login!!
            </Link>
          </div>
        )}
      </div>
      <div className="review-section w-4/5 mx-auto my-12">
        <h2 className="font-bold text-3xl text-cyan-500">Reviews</h2>
      </div>
      <div className="reviews w-4/5 mx-auto mb-40">
        <div className="overflow-x-auto w-4/5 mx-auto md:w-full">
          <table className="table w-full mx-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Reviews</th>
              </tr>
            </thead>
            {selectedReviews.map((sr) => (
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={sr?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{sr?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{sr?.email}</td>
                  <td>{sr.review}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
