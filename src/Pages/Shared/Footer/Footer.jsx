import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h2 className="text-3xl font-bold font-serif"><span className="text-purple-500">A</span><span className="text-purple-400">r</span><span className="text-purple-300">t</span> & <span className="text-violet-200">C</span><span className="text-violet-300">r</span><span className="text-violet-400">a</span><span className="text-violet-500">f</span><span className="text-violet-600">t</span></h2>
                    <p>Art & craft SchoolArt & craft School Ltd.<br />Providing reliable art & craft education since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <Link><span className='font-semibold'>Address:</span> Road # 137, Block # SE(F), <br /> Gulshan-2, Dhaka-1212.</Link>
                    <Link><span className='font-semibold'>Phone: </span> 012893749</Link>
                    <Link><span className='font-semibold'>Email:</span> art&craft@gmail.com</Link>
                </div>
                <div>
                    <span className="footer-title">Follow us</span>
                    
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className='h-5 w-5 text-white'></FaFacebook>
                        <FaInstagram className='h-5 w-5 text-white'></FaInstagram>
                        <FaTwitter className='h-5 w-5 text-white'></FaTwitter>
                    </div>
                </div>

            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Art & craft School Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;