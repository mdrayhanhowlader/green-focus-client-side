import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const { review, _id } = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.update.value;
    const updateReview = { data };

    fetch(`https://wild-life-photography-server.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
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
      <div className="w-4/5 mx-auto my-20 text-center">
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="update"
            defaultValue={review}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <input
            type="submit"
            value="Update"
            className="bg-cyan-800 text-slate-50 w-full max-w-xs mx-auto py-4 my-4 rounded-3xl cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
