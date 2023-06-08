import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { useState } from 'react';

import slider1 from '../../../assets/Home/banner1.jpg';
import slider2 from '../../../assets/Home/banner2.jpg';
import slider3 from '../../../assets/Home/banner3.jpg';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <Carousel showThumbs={false} onChange={handleSlideChange}>
      <div className="relative flex items-center justify-center">
        <img src={slider1} alt="Slide 1" />
        {activeSlide === 0 && (
          <motion.div
            className="absolute top-2/3"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.p className="text-center bg-indigo-700 bg-opacity-70 p-4 text-white" variants={textVariants}>
              We are offering 50% weaver on our handcrafts course
            </motion.p>
            <motion.h2 className="text-2xl font-serif text-red-400 mt-2" variants={textVariants}>
              Enroll it hurry!!
            </motion.h2>
          </motion.div>
        )}
      </div>

      <div className="relative flex items-center justify-center">
        <img src={slider2} alt="Slide 2" />
        {activeSlide === 1 && (
          <motion.div
            className="absolute top-2/3"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.p className="text-center bg-indigo-700 bg-opacity-70 p-4 text-white" variants={textVariants}>
              Only a few spots are available for this course. Enroll now!
            </motion.p>
          </motion.div>
        )}
      </div>

      <div className="relative flex items-center justify-center">
        <img src={slider3} alt="Slide 3" />
        {activeSlide === 2 && (
          <motion.div
            className="absolute top-2/3"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.p className="text-center bg-indigo-700 bg-opacity-70 p-4 text-white" variants={textVariants}>
              Our Art Craft course demo is available on our YouTube channel!
            </motion.p>
          </motion.div>
        )}
      </div>
    </Carousel>
  );
};

export default Banner;
