import React from "react";
import styles from "../styles/Navbar.module.css";

const Tagline = () => {
  return (
    <div className="leading-20">
      <div className="pl-20 pt-20 text-white align-middle mt-10 justify-center ">
        <h3 className="text-2xl mt-5 py-5 leading-10">
          Your Neighborhood Roofing Experts
        </h3>
        <h1 className="text-8xl w-full leading-20">TOTAL HOME ROOFING</h1>
        <p className="text-xl py-5 w-2/5 py-15 leading-10">
          With <span classname={styles.warrantyText}>Knox Restoration</span>{" "}
          you'll receive hassle-free roofing solutions with free estimates and
          unbeatable financing options. Our
          <span> industry leading warranty</span> gurantees quality craftmanship
          and <span>peace of mind</span> for years to come
        </p>
      </div>
    </div>
  );
};

export default Tagline;
