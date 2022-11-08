import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoLibrary = () => {
  return (
    <div className="w-full mx-auto md:grid md:grid-cols-3 gap-4">
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/4141153/pexels-photo-4141153.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/4141153/pexels-photo-4141153.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/1130434/pexels-photo-1130434.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/1130434/pexels-photo-1130434.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/209096/pexels-photo-209096.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/209096/pexels-photo-209096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src="https://images.pexels.com/photos/162256/wolf-predator-european-wolf-carnivores-162256.jpeg?auto=compress&cs=tinysrgb&w=600">
            <img
              className="w-full rounded-md"
              src="https://images.pexels.com/photos/162256/wolf-predator-european-wolf-carnivores-162256.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoLibrary;
