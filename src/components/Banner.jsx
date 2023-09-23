import React from "react";
import img from "../assets/image/banner.svg";

const Banner = ({ title }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url('${img}')`,
        height: "300px",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-white text-center font-bold text-5xl italic pb-3 border-b-4 border-white">{title}</h2>
    </div>
  );
};

export default Banner;
