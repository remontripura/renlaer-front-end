import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { logo } from '../../components';

const Footer = () => {
    return (
        <section className="bg-[#051A32] text-white">
            <div className='p-10 max-w-7xl mx-auto'>
                <footer className="footer lg:flex justify-between gap-2">
                    <aside className='space-y-8 lg:w-4/12'>
                        <div>
                            <img className='w-32' src={logo} alt="" />
                        </div>
                        <div className='space-y-4'>
                            <p className='font-bold'>Sales: sales@proxylife.com</p>
                            <p className='font-bold'>Support: sales@proxylife.com</p>
                            <p className='font-bold'>Cooperate: sales@proxylife.com</p>
                        </div>
                        <div>
                            <p>
                                proxylife makes it easy for everyone to use, mine, and explore the mysteries of data.
                            </p>
                            <div className='flex gap-3 items-center'>
                                <span>Follow Us</span>
                                <div className="w-6 h-6 bg-slate-500 flex justify-center items-center rounded-full">
                                    <FaFacebook className="text-[12px] w-full text-white" />
                                </div>
                                <div className="w-6 h-6 bg-slate-500 flex justify-center items-center rounded-full">
                                    <FaTwitter className="text-[12px] w-full text-white" />
                                </div>
                                <div className="w-6 h-6 bg-slate-500 flex justify-center items-center rounded-full">
                                    <FaYoutube className="text-[12px] w-full text-white" />
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className='lg:w-7/12 lg:flex justify-between gap-3'>
                        <nav className='flex flex-col space-y-3'>
                            <header className="footer-title">Product</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className='flex flex-col space-y-3'>
                            <header className="footer-title">Use Cases</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className='flex flex-col space-y-3'>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </footer>
            </div>
            <div className='border-t-[1px] border-white'>
                <p className='max-w-7xl mx-auto pl-10 pt-2 text-[12px]'>© 2023 proxylife.com. All right reserved.</p>
            </div>
        </section>
    );
};

export default Footer;