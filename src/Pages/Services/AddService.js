import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AddService = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const service = services.length + 1;
  const seller = user?.displayName;

  useEffect(() => {
    fetch("https://wild-life-photography-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const details = form.details.value;
    console.log(category, name, price, rating, img, details);
    const addData = {
      category: category,
      name: name,
      seller: seller,
      service: service,
      price: price,
      rating: rating,
      img: img,
      details: details,
    };

    fetch("https://wild-life-photography-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    form.reset();
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleOnSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category:</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="category"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price:</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating:</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image:</span>
                </label>
                <input
                  type="url"
                  name="img"
                  placeholder="img"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details:</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
