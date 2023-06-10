import React from "react";

const Newsletter = () => {
  return (
    <div className="border-t-2 border-rose-400 h-60 mt-8">
      <div>
        <h2 className="text-3xl text-center font-semibold mt-20 mb-4">
          SIGN UP FOR THE NEWSLETTER
        </h2>
      </div>
      <div className="border-b-2 w-1/12 mx-auto border-rose-400 h-2 mb-6"></div>
      <div className="flex justify-center items-center">
        <input
          className="text-lg pr-32 py-[7px]"
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <button className="uppercase text-lg bg-red-700 py-2 px-6 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
