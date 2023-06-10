import React from "react";

const Dreams = () => {
  return (
    <div className="my-20">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <img
              src="http://demo.enpek.com/html-templates/dye/assets/images/banner/banner-small-4.jpg"
              alt=""
            />
          </div>
          <div className="bg-red-700 text-white">
            <div className="p-4">
              <h2 className="text-3xl text-center pb-2 mt-8">Abstract Print</h2>
              <p className="text-center py-2">
                A clean and modern take on abstract prints design take on
                abstract prints desig take on abstract prints design
              </p>
              <div className="text-center">
                <button className="text-white bg-black px-6 py-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-red-700 text-white">
            <div className="p-4">
              <h2 className="text-3xl text-center pb-2 mt-8">
                Illustrated Paints
              </h2>
              <p className="text-center py-2">
                A clean and modern take on abstract prints design take on
                abstract prints desig take on abstract prints design
              </p>
              <div className="text-center">
                <button className="text-white bg-black px-6 py-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="http://demo.enpek.com/html-templates/dye/assets/images/banner/banner-small-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
