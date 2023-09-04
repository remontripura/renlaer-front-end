import { FaWallet } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ChooseUs = () => {
    return (
        <section className="mt-20 mb-10 max-w-7xl mx-auto rounded-md p-5">
            <div className="my-10">
                <h2 className="text-center text-3xl font-bold">Why businesses choose us</h2>
            </div>
            <div className="">
                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2">
                <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                    <div className="flex items-center gap-5 my-3">
                        <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                            <FaWallet className="text-2xl w-full text-white" />
                        </div>
                        <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                    </div>
                    <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                </div>
                <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                    <div className="flex items-center gap-5 my-3">
                        <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                            <FaWallet className="text-2xl w-full text-white" />
                        </div>
                        <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                    </div>
                    <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                </div>
                <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                    <div className="flex items-center gap-5 my-3">
                        <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                            <FaWallet className="text-2xl w-full text-white" />
                        </div>
                        <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                    </div>
                    <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                </div>
            </div> */}
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    
                >
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                            <div className="bg-white rounded-md border border-white p-5 hover:border hover:border-[#4577FC]">
                                <div className="flex items-center gap-5 my-3">
                                    <div className="w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full">
                                        <FaWallet className="text-2xl w-full text-white" />
                                    </div>
                                    <h2 className="text-[18px] font-semibold">Advertising verification</h2>
                                </div>
                                <p>Ensure that advertisements are correctly displayed in any place and any scene</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
};

export default ChooseUs;