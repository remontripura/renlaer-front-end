import React from "react";
import Banner from "../../components/Banner";
import { BiMessageDetail } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Banner title="Contact Us" />
      </div>
      <div className="max-w-7xl mx-auto my-20">
        <div className="w-full text-center my-20">
          <h2 className="text-2xl font-bold ">Get In Touch With Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#4A5BFF] p-3 rounded-full flex items-center justify-center">
              <BiMessageDetail className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">Intercom</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                Open Chat
              </a>
            </div>
          </div>
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#01CDBD] p-3 rounded-full flex items-center justify-center">
              <FaTelegramPlane className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">Telegram</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                @renlaerproxy
              </a>
            </div>
          </div>
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#FA706C] p-3 rounded-full flex items-center justify-center">
              <BsDiscord className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">discord</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                renlaer#5939
              </a>
            </div>
          </div>
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#FA706C] p-3 rounded-full flex items-center justify-center">
              <AiOutlineMail className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">Sales Email</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                sales@renlaer.com
              </a>
            </div>
          </div>
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#4A5BFF] p-3 rounded-full flex items-center justify-center">
              <AiOutlineMail className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">Support Email</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                support@renlaer.com
              </a>
            </div>
          </div>
          <div className="rounded flex flex-col justify-center items-center p-14 bg-white">
            <div className="bg-[#01CDBD] p-3 rounded-full flex items-center justify-center">
              <AiOutlineMail className="text-white text-[32px]" />
            </div>
            <div className="text-center mt-3">
              <h2 className="font-bold text-[14px]">Cooperate Email</h2>
              <a
                className="font-bold text-[14px] text-cyan-600 underline"
                href="#"
              >
                sales@renlaer.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
