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
      <li
        className="group opacity-100 flex items-center gap-2"
        onClick={toggleDropdown}
      >
        Product
        <div className="absolute group left-80 invisible lg:group-hover:visible opacity-100 top-20">
          <div className="w-6 h-6 bg-white rotate-45 absolute -top-3 left-48"></div>
          <ul className="lg:grid grid-cols-3 max-w-[700px] p-8 gap-10 relative bg-white text-black">
            {dropdown.map((data) => (
              <li className="shadow-md shadow-slate-300 p-3">
                <p className="font-bold">{data.title}</p>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <FaAngleDown className="text-[20px] hidden lg:flex lg:group-hover:rotate-180 duration-500" />
        <div onClick={rotateIcon} className="flex lg:hidden group">
          {isIconOpen ? (
            <FaAngleDown
              onClick={rotateIcon}
              className="text-[20px] lg:flex duration-500"
            />
          ) : (
            <FaAngleUp
              onClick={rotateIcon}
              className="text-[20px] duration-500"
            />
          )}
        </div>
      </li>
      {isOpen && (
        <div className="opacity-100">
          <ul className="lg:flex flex-col gap-10 relative bg-white text-black">
            {dropdown.map((data) => (
              <li className="shadow-md shadow-slate-300 p-3">
                <p className="font-bold">{data.title}</p>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <li className="">
        <Link to="/product" className="list-style">
          Scenario
        </Link>
      </li>
      <li className="">
        <Link className="ancor-style" to="/about">
          about Us
        </Link>
      </li>

      <li className="">
        <Link className="ancor-style" to="/help">
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
      {/* <div className="navbar lg:max-w-7xl mx-auto text-white">
                <div className="navbar-start">
                    <Link to="/"><img className="w-24" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center lg:flex ">
                    <ul className="menu menu-horizontal lg:flex gap-7 hidden px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end lg:flex ">
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#1a4bff] text-white">
                            {navItem}
                            <div className="lg:hidden flex flex-col gap-2">
                                <button className="bg-[#5177FF] py-2 rounded-xl font-semibold text-white hover:bg-[#1a4bff] w-full">Login</button>
                                <button className="bg-[#5177FF] py-2 rounded-xl font-semibold text-white hover:bg-[#1a4bff] w-full">Sign Up</button>
                            </div>
                        </ul>

                    </div>
                    <div className="lg:flex gap-2 hidden">
                        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">Login</button>
                        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">Sign Up</button>
                    </div>
                </div>
            </div> */}
      <div className="lg:max-w-7xl mx-auto text-white flex justify-between items-center px-4 py-3">
        <div className="">
          <Link to="/">
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul className="lg:flex justify-center items-center gap-8 hidden">
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
              Login
            </button>
            <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">
              Sign Up
            </button>
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute  text-black right-0 bg-green-500 top-8 w-[300px] z-50`}
          >
            <ul className="lg:hidden flex flex-col justify-center items-center gap-8 w-full py-5">
              {navItem}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="absolute top-0 -left-[400px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1200px] transform">
                <div className="relative top-3 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[23rem] duration-500 ease-in-out rounded-sm">
                    </div>
                    <div className="relative z-10">
                        <div className="grid grid-cols-3 gap-3">
                            {
                                scanario.map(data => <div key={data.id} className="text-black">
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="font-bold">{data.title}</h2>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div> */
}
