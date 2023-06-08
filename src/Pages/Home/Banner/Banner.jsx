import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slider1 from '../../../assets/Home/banner1.jpg';
import slider2 from '../../../assets/Home/banner2.jpg';
import slider3 from '../../../assets/Home/banner3.jpg';


const Banner = () => {
    return (
        <Carousel>
            <div className="relative flex items-center justify-center">
                <img src={slider1} alt="Slide 1" />
                <div className="absolute top-2/3 bg-indigo-700 bg-opacity-70 p-4 text-white">
                    <p className="text-center">We are offering 50% weaver on our  handcrafts course</p>
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <img src={slider2} alt="Slide 1" />
                <div className="absolute top-2/3 bg-indigo-700 bg-opacity-70 p-4 text-white">
                    <p className="text-center">Only few sets are available for this course. Enroll it hurry!</p>
                    
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <img src={slider3} alt="Slide 1" />
                <div className="absolute top-2/3 bg-indigo-700 bg-opacity-70 p-4 text-white">
                    <p className="text-center">Our Art Craft course demo is available on our youtube channel!</p>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;