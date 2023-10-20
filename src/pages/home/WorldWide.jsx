
import { flag } from '../../components';


const WorldWide = () => {
    return (
        <section className='bg-white'>
            <div className="mt-20 max-w-7xl mx-auto bg-white rounded-md p-5">
                <div className="lg:grid grid-cols-2 gap-5">
                    <div className='flex flex-col justify-center lg:p-14 space-y-5'>
                        <h2 className='font-bold text-4xl'>Worldwide Coverage</h2>
                        <p className=' text-slate-500 text-[12px]'>Reliable Residential Proxies available in 190+ countries worldwide.And we are constantly adding new locations.</p>
                    </div>
                    <div>
                        <img src={flag} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldWide;