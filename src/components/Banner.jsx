import React from "react";
import img from "../assets/image/banner.svg";

const Banner = ({ title }) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url('${img}')`,
        height: "350px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h2 className="text-white w-72 text-center font-bold text-3xl italic pb-3 absolute right-0 left-0 mx-auto top-[185px]">{title}</h2>
    </div>
  );
};

export default Banner;
