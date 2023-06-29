import React from "react";
import RoofingForm from "./RoofingForm";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Tagline from "./Tagline";
const ImageWithForm = () => {
  return (
    <div className="relative">
      <div className={styles.imageContainer}>
        {" "}
        <Image
          src="https://media.istockphoto.com/id/1334926091/photo/roof-of-new-house-with-shingles-roof-tiles-and-ventilation-window.jpg?s=2048x2048&w=is&k=20&c=N9WMvRaYjmgo3LUF4UelcLmxCH1hj7RxMZK5ER8LPx8="
          className="h-full w-full"
          alt="Your Image"
          width={500}
          height={200}
        />
      </div>
      <div className="flex">
        <div className="absolute top-20  py-5 items-center justify-center  w-full">
          <Tagline />
        </div>
        <div className="absolute top-4 right-20 pr-5  h-50 w-1/3  m-2 py-5 flex items-center justify-center">
          <div className="p-4  h-full w-full bg-white opacity-95">
            <RoofingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithForm;
