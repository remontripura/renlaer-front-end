import { Link } from "react-router-dom";
import { dropdown, logo } from "../../components";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { scanario } from "./NavItem";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIconOpen, setIsIconOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const rotateIcon = () => {
    setIsIconOpen(!isIconOpen);
  };
  const navItem = (
    <>
      <li className="list-style">
        <Link className="ancor-style" to="/">
          Home
        </Link>
      </li>
      <li className="group opacity-100 flex items-center gap-2 relative">
        <span className="hidden lg:flex">Products</span>
        <div className="flex justify-center items-center gap-2 lg:hidden group">
          Product
        </div>
        <div className="absolute group -left-44 invisible lg:group-hover:visible opacity-100 top-20 duration-300 w-[700px]">
          <div className="w-5 h-5 bg-white rotate-45 absolute -top-2 left-48"></div>
          <ul className="lg:grid grid-cols-3 max-w-[700px] p-8 gap-10 relative bg-white text-black rounded">
            {dropdown.map((data) => (
              <li className="shadow-md shadow-slate-300 p-3">
                <Link to={data.to} className="font-bold hover:text-[#5177FF] text-[16px]">{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <FaAngleDown className="text-[20px] hidden lg:flex lg:group-hover:rotate-180 duration-500" />
      </li>
      <li className="">
        <Link className="ancor-style" to="/aboutUs">
          about Us
        </Link>
      </li>

      <li className="">
        <Link className="ancor-style" to="/contactUs">
          Contact Us
        </Link>
      </li>
      <li className="">
        <Link className="ancor-style" to="/service">
          Help Center
        </Link>
      </li>
    </>
  );
  const dropdownItem = (
    <>
      <li className="list-style">
        <Link className="ancor-style" to="/">
          Home
        </Link>
      </li>
      <li
        className="group opacity-100 flex items-center gap-2"
        onClick={toggleDropdown}
      >
        <span className="hidden lg:flex">Products</span>
        <div
          onClick={rotateIcon}
          className="flex justify-center items-center gap-2 lg:hidden group"
        >
          Product
          {isIconOpen ? (
            <FaAngleDown className="text-[20px]" />
          ) : (
            <FaAngleUp className="text-[20px]" />
          )}
        </div>
        {/* <div className="absolute group left-80 invisible lg:group-hover:visible opacity-100 top-20">
          <div className="w-6 h-6 bg-white rotate-45 absolute -top-3 left-48"></div>
          <ul className="lg:grid grid-cols-3 max-w-[700px] p-8 gap-10 relative bg-white text-black">
            {dropdown.map((data) => (
              <li className="shadow-md shadow-slate-300 p-3">
                <p className="font-bold">{data.title}</p>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </div> */}
        <FaAngleDown className="text-[20px] hidden lg:flex lg:group-hover:rotate-180 duration-500" />
      </li>
      {isOpen && (
        <div className="opacity-100">
          <ul className="lg:flex flex-col gap-10 relative bg-white text-black">
            {dropdown.map((data) => (
              <li className="shadow-md shadow-slate-300 p-3">
                <Link to={data.to} className="font-bold hover:text-[#5177FF] text-[16px]">{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <li className="">
        <Link className="ancor-style" to="/aboutUs">
          about Us
        </Link>
      </li>
      <li className="">
        <Link className="ancor-style" to="/contactUs">
          Contact Us
        </Link>
      </li>
      <li className="">
        <Link className="ancor-style" to="/service">
          Help Center
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-[#131947] relative">
      <div className="lg:max-w-7xl mx-auto flex justify-between items-center px-4 text-white py-5">
        <div className="">
          <Link to="/">
            <img className="w-28" src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className="lg:flex justify-center items-center gap-8 hidden relative">
            {navItem}
          </ul>
        </nav>
        <div className="relative">
          <div className="flex lg:hidden">
            <p onClick={() => setToggle((previous) => !previous)}>
              {toggle ? (
                <AiOutlineClose className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </p>
          </div>
          <div className="hidden lg:flex gap-5">
            <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">
              <Link to="login">Login</Link>
            </button>
            <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">
              <Link to="register"> Sign Up</Link>
            </button>
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute  text-black right-0 bg-[#ffff] top-8 w-[300px] z-50`}
          >
            <ul className="lg:hidden flex flex-col justify-center items-center gap-8 w-full py-5 mx-3">
              {dropdownItem}
              <div className="lg:hidden flex gap-5">
              <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">
                <Link to="login">Login</Link>
              </button>
              <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">
                <Link to="register"> Sign Up</Link>
              </button>
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
