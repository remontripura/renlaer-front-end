import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  let navRef = useRef();
  let [navHeight, setNavHeight] = useState();
  useEffect(() => {
    // Log the height of the navRef element after it has been rendered
    setNavHeight(navRef.current.offsetHeight);
  }, [navRef]);

  let [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    let oldScroll = 0;
    window.addEventListener("scroll", () => {
      window.pageYOffset > oldScroll ? setNavScroll(true) : setNavScroll(false);
      oldScroll = window.pageYOffset;
    });
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed z-30 top-0 w-full ${
          navScroll && "!top-[-300px]"
        } duration-500`}
      >
        <Navbar />
      </div>
      <div className={`mt-[${navHeight}px]`}>
        <Outlet />
      </div>
      <Footer />
      <div className={`fixed z-30 bottom-24 right-10 duration-500`}>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Main;
