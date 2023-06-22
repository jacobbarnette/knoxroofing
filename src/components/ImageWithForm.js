import React from "react";
import RoofingForm from "./RoofingForm";
const ImageWithForm = () => {
  return (
    <div className="relative">
      <img
        src="https://media.istockphoto.com/id/1334926091/photo/roof-of-new-house-with-shingles-roof-tiles-and-ventilation-window.jpg?s=2048x2048&w=is&k=20&c=N9WMvRaYjmgo3LUF4UelcLmxCH1hj7RxMZK5ER8LPx8="
        className="h-full w-full"
        alt="Your Image"
      />
      <div className="absolute top-4 right-20 h-75 w-1/4  m-2  flex items-center justify-center">
        <div className="p-4  h-full w-full bg-white opacity-95">
          <RoofingForm />
        </div>
      </div>
    </div>
  );
};

export default ImageWithForm;
