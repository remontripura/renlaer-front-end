import { FaFileImage, FaHome } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdWifiFind } from "react-icons/md";


const Products = () => {
    return (
        <section className="mt-20 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Popular <span className="text-[#5177FF]">products</span> of ProxyLife</h2>
                <p>Flexible selection according to business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-5">
                <div className="p-5 bg-white space-y-5 rounded hover:shadow-md shadow-slate-300 relative h-[450px]">
                    <div className="p-3 bg-[#4A5BFF] w-16 h-16 flex justify-center items-center rounded-full">
                        <FaHome className="text-3xl text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold">Residential Proxies</h2>
                    <p className="text-slate-500">More than 30 million real residential IP addresses from 190 regions</p>
                    <div className="divider"></div>
                    <ul className="space-y-3">
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span>Unlimited connections and threads</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> 195+ locations</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span>Up to 90 minutes of sticky sessions</span>
                        </li>
                    </ul>
                    <div className="flex justify-center absolute bottom-3 w-28 left-0 right-0 mx-auto">
                        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">View Now</button>
                    </div>
                </div>
                <div className="p-5  bg-white space-y-5 rounded hover:shadow-md shadow-slate-300 relative h-[450px]">
                    <div className="p-3 bg-[#4A5BFF] w-16 h-16 flex justify-center items-center rounded-full">
                        <FaFileImage className="text-3xl text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold">ISP Proxies</h2>
                    <p className="text-slate-500">The authority of residential and the speed of data center</p>
                    <div className="divider"></div>
                    <ul className="space-y-3">
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                    </ul>
                    <div className="flex justify-center absolute bottom-3 w-28 left-0 right-0 mx-auto">
                        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">View Now</button>
                    </div>
                </div>
                <div className="p-5  bg-white space-y-5 rounded hover:shadow-md shadow-slate-300 relative h-[450px]">
                    <div className="p-3 bg-[#4A5BFF] w-16 h-16 flex justify-center items-center rounded-full">
                        <MdWifiFind className="text-3xl text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold">Residential Proxies</h2>
                    <p className="text-slate-500">More than 30 million real residential IP addresses from 190 regions</p>
                    <div className="divider"></div>
                    <ul className="space-y-3">
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                        <li className="flex gap-2 justify-start items-center">
                            <TiTick className="text-green-500 text-[18px]" />
                            <span> Not Yet Open</span>
                        </li>
                    </ul>
                    <div className="flex justify-center absolute bottom-3 w-28 left-0 right-0 mx-auto">
                        <button className="bg-[#5177FF] py-2 rounded font-semibold text-white hover:bg-[#1a4bff] w-[100px]">View Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;