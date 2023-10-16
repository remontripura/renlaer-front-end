import { FaBug } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";

const Hero = () => {
  return (
    <section className="bg-[#0F1740] h-[700px]">
      <div className="h-[700px] flex flex-col justify-center items-center text-white lg:px-0 px-5">
        <div className="max-w-7xl mx-auto ">
          <h2 className="font-bold text-white text-center text-5xl">
            Leading global proxy service providers and data collection solutions
          </h2>
        </div>
        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px] mt-10">
          Use Now
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-5 max-w-7xl  lg:bottom-10 lg:px-0 px-5 mt-20 pb-10">
          <div className="flex items-center gap-2">
            <p>
              <FaBug className="text-4xl" />
            </p>
            <div>
              <h2 className="text-[18px] font-semibold">30M+Ip</h2>
              <p className="text-[12px]">Access to tens of millions of IPs</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <FaLocationDot className="text-4xl" />
            </p>
            <div>
              <h2 className="text-[18px] font-semibold">EveryWhere</h2>
              <p className="text-[12px]">
                You can choose from over 190 locations with country/city/state
                targeting
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <BsPeopleFill className="text-4xl " />
            </p>
            <div>
              <h2 className="text-[18px] font-semibold">10,000+</h2>
              <p className="text-[12px]">
                Over 10,000 various data professionals are used
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <SlEarphonesAlt className="text-4xl" />
            </p>
            <div>
              <h2 className="text-[18px] font-semibold">24/7 Support</h2>
              <p className="text-[12px]">
                IT specialists provide technical support 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
