
import { PiRadioButtonFill } from "react-icons/pi";
import { image1, image2, image3 } from '../../components';
const Dashboard = () => {
    return (
        <section className='bg-white'>
            <div className="mt-20 max-w-7xl mx-auto bg-white rounded-md p-5">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 mb-10">
                    <div className='flex flex-col justify-center lg:p-14 space-y-5'>
                        <h2 className='font-bold text-4xl'>User Center Dashboard Overview</h2>
                        <p className=' leading-10 text-slate-500'>Take advantage of our extensive dashboard that gives complete freedom to our users.Track usage statistics, manage subscriptions, and get easy integration snippets.</p>
                        <ul className='space-y-5'>
                            <li className='flex gap-2 items-center'>
                                <PiRadioButtonFill className='text-[#5177FF] text-[20px]' />
                                <span>View usage</span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <PiRadioButtonFill className='text-[#5177FF] text-[20px]' />
                                <span>View background bill</span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <PiRadioButtonFill className='text-[#5177FF] text-[20px]' />
                                <span>Change the package at any time</span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <PiRadioButtonFill className='text-[#5177FF] text-[20px]' />
                                <span>Create and manage channels</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className="w-full rounded" src={image1} alt="" />
                    </div>
                </div>
                <div className="lg:grid grid-cols-2 gap-5 mb-10">
                    <div>
                        <img className="w-full rounded" src={image2} alt="" />
                    </div>
                    <div className='flex flex-col justify-center lg:p-14 space-y-5'>
                        <h2 className='font-bold text-4xl'>More than 30 million Residential Proxy pools worldwide</h2>
                        <p className=' leading-10 text-slate-500'>By cooperating with network operators in many countries around the world, we can provide users with stable, reliable and high-quality agency services. This is due to our agency network resources in more than 100 countries around the world, and strict screening and standardization.</p>
                    </div>
                </div>
                <div className="lg:grid grid-cols-2 gap-5">
                    <div className='flex flex-col justify-center lg:p-14 space-y-5'>
                        <h2 className='font-bold text-4xl'>Advanced data collection solutions</h2>
                        <p className=' leading-10 text-slate-500'>Use faster and more stable proxy services to capture data, save thousands of costs for enterprises, and provide them with data collection for analysis, so as to promote the development of global enterprise data business.</p>
                    </div>
                    <div>
                        <img className="w-full rounded" src={image3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;