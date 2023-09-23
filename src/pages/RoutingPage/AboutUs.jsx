import React from "react";
import Banner from "../../components/Banner";
import { FaRocket } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaGemSolid } from "react-icons/lia";

const AboutUs = () => {
  return (
    <div>
      <div>
        <Banner title="About Us" />
      </div>
      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-10">
          <div className="w-full my-10">
            <h2 className="text-4xl font-bold text-center mb-10">We Are Renlaer</h2>
            <div className="space-y-4 leading-10">
              <p>
                We are a professional proxy service provider.We Specialize in IP
                Networking.
              </p>
              <p>
                We have extensive IP networking experience. With millions of
                IPv4 address ranges in various regions worldwide, we are
                well-equipped to serve all your IPv4 related needs.
              </p>
              <p>
                The world of IP networking can be confusing and intimidating.
                With so many options to choose from, you need a reliable and
                trustworthy service, with an excellent reputation. At Renlaer,
                we aim to provide a sustainable and predictable solution
                tailored to your specific IP address business needs. Our
                solutions are cost-effective, reliable, and easy-to-use, giving
                you a first-rate experience that grows along with you.
              </p>
              <p>
                As a leading big data company, we serve customers from all
                corners of the globe with unparalleled expertise and
                professionalism. With us, you can rest assured that your needs
                will be met with the utmost care and attention to detail. Trust
                us to deliver exceptional results every time – we're here to
                take your business to new heights!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-20">
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-center">
            Vision & Mission & Values
          </h2>
        </div>
        <div>
          <div className="grid md:grid grid-cols-3 gap-5">
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <div className="bg-[#fff] p-5 rounded-full flex items-center justify-center">
                <FaRocket className="text-[#1A4BFF] text-[32px]" />
              </div>
              <div className="text-black font-bold">
                <h2>Vision</h2>
              </div>
              <div>
                <p>
                  Provide a fair network environment and promote the development
                  of data services
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <div className="bg-[#fff] p-5 rounded-full flex items-center justify-center">
                <HiOutlineLightBulb className="text-[#1A4BFF] text-[32px]" />
              </div>
              <div className="text-black font-bold">
                <h2>Mission</h2>
              </div>
              <div>
                <p>
                  Provide high-quality proxy services for public data collection
                  and any other lawful use
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <div className="bg-[#fff] p-5 rounded-full flex items-center justify-center">
                <LiaGemSolid className="text-[#1A4BFF] text-[32px]" />
              </div>
              <div className="text-black font-bold">
                <h2>Values</h2>
              </div>
              <div>
                <p>
                  Customer first, innovation first, honesty and trustworthiness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
