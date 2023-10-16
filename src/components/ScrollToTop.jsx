import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Link
        to="/"
        className=""
        smooth={true}
        duration={1000}
      >
        <button onClick={goToTop}>
            <BsFillArrowUpCircleFill className="lg:text-5xl text-3xl text-black"/>
        </button>
      </Link>
    </div>
  );
};

export default ScrollToTop;
