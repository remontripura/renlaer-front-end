import { FaBitcoin, FaCcAmex, FaCcVisa, FaGoogle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BiLogoMastercard } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const Pricing = () => {
    return (
        <section className="bg-[#4A5BFF]">
            <div className="mt-20 max-w-7xl mx-auto rounded-md p-5 text-white">
                <div className="my-10">
                    <h2 className="text-center text-3xl font-bold">Pricing</h2>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="p-5 bg-[#ffffff3c] space-y-8 rounded">
                        <div>
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p>Perfect plan for Starters</p>
                        </div>
                        <div>
                            <p><span className="font-bold">$ <span className="text-3xl">30</span></span>/per Month</p>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Traffic: 10GB</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Price per GB: $3</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Channels: 3</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Session management: 5-90</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full hover:bg-[#5868FF] border border-[white] hover:border-[#5868FF] p-[5px] rounded font-bold">
                            Buy Now
                        </button>
                    </div>
                    <div className="p-5 bg-[#8F99FF] space-y-8 rounded">
                        <div>
                            <h2 className="text-2xl font-bold">Plus</h2>
                            <p>For users who want to do more</p>
                        </div>
                        <div>
                            <p><span className="font-bold">$ <span className="text-3xl">70</span></span>/per Month</p>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Traffic: 25GB</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Price per GB: $2.8</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Channels: 5</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Session management: 5-90</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full hover:bg-[#5868FF] border border-[white] hover:border-[#5868FF] p-[5px] rounded font-bold">
                            Buy Now
                        </button>
                    </div>
                    <div className="p-5 bg-gradient-to-b from-[#ffff] to-[#5868FF] space-y-8 rounded text-black">
                        <div>
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p>Tour entire team in one place</p>
                        </div>
                        <div>
                            <p><span className="font-bold">$ <span className="text-3xl text-red-500">125</span></span>/per Month</p>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Traffic: 50GB</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Price per GB: $2.5</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Channels: 10</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Session management: 5-90</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full hover:bg-[#5868FF] border border-[white] hover:border-[#5868FF] p-[5px] rounded font-bold">
                            Buy Now
                        </button>
                    </div>
                    <div className="p-5 bg-[#ffffff3c] space-y-8 rounded">
                        <div>
                            <h2 className="text-2xl font-bold">EnterPrice</h2>
                            <p>Run your company on your terms</p>
                        </div>
                        <div>
                            <p><span className="font-bold">$ <span className="text-3xl">230</span></span>/per Month</p>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Traffic: 100GB</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Price per GB: $2.3</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Channels: 20</span>
                                </li>
                                <li className="flex gap-2 justify-start items-center">
                                    <TiTick className="text-white text-[18px]" />
                                    <span>Session management: 5-90</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full hover:bg-[#5868FF] border border-[white] hover:border-[#5868FF] p-[5px] rounded font-bold">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="my-10 flex justify-between">
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">Payment Method</h2>
                        <FaCcVisa className="text-[25px]"/>
                        <BiLogoMastercard  className="text-[25px]"/>
                        <FaCcAmex  className="text-[25px]"/>
                        <FaBitcoin  className="text-[25px]"/>
                        <FaGoogle  className="text-[25px]"/>
                    </div>
                    <div className="">
                        <button className="bg-[#5868FF] p-[10px] border border-[#5868FF] hover:border hover:border-[#ffff] rounded font-bold flex items-center justify-center gap-5">
                            Need More? Contact Our Sales 
                            <AiOutlineArrowRight />
                        </button>
                        
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Pricing;