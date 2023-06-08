import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import img from '../../../assets/Home/about1.jpeg'

const ExtraSection = () => {

    const [aboutRef, aboutInView] = useInView({
        threshold: 0.1,
    });
    const [storyRef, storyInView] = useInView({
        threshold: 0.1,
    });
    const aboutControls = useAnimation();
    const storyControls = useAnimation();

    useEffect(() => {
        if (aboutInView) {
            aboutControls.start('visible');
        } else {
            aboutControls.start('hidden');
        }
    }, [aboutInView, aboutControls]);

    useEffect(() => {
        if (storyInView) {
            storyControls.start('visible');
        } else {
            storyControls.start('hidden');
        }
    }, [storyInView, storyControls]);
    const textVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            y: 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        },
    };

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8" ref={aboutRef}>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <motion.h1
                        className="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white"
                        variants={textVariants}
                        initial="hidden"
                        animate={aboutControls}
                    >
                        About <span className="text-violet-600">Us</span>
                    </motion.h1>
                    <motion.p
                        className="font-normal text-base leading-6 text-gray-600"
                        variants={textVariants}
                        initial="hidden"
                        animate={aboutControls}
                    >
                        Welcome to our website! We are dedicated to celebrating the beauty and creativity of art and craftsmanship.

                        At our website, you will discover a diverse range of art forms, including painting, sculpture, pottery, textiles, woodworking, jewelry making, and more. We believe in the power of art to inspire, uplift, and transform lives. Whether you are an artist looking to share your creations or someone who appreciates art, we invite you to immerse yourself in our vibrant community.

                        We strive to create an inclusive and supportive environment where artists from all backgrounds and experiences can thrive. We celebrate diversity and welcome artists of all ages, skill levels, and styles. Join us and be part of a community that values and cherishes the power of art to bring people together and make a positive impact.

                        Thank you for visiting our website. We hope you find inspiration, joy, and a sense of belonging in our Art & Crafts page. Explore, create, and share your passion for art with us!
                    </motion.p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <motion.img
                        className="w-full h-full"
                        src={img}
                        alt="img"
                        variants={imageVariants}
                        initial="hidden"
                        animate={aboutControls}
                    />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center" ref={storyRef}>
                    <motion.h1
                        className="mb-4 text-4xl tracking-tight font-extrabold font-serif text-gray-900 dark:text-white"
                        variants={textVariants}
                        initial="hidden"
                        animate={storyControls}
                    >
                        Our <span className="text-violet-600">Story</span>
                    </motion.h1>
                    <motion.p
                        className="font-normal text-base leading-6 text-gray-600"
                        variants={textVariants}
                        initial="hidden"
                        animate={storyControls}
                    >
                        Driven by our love for art and craftsmanship, we created a platform to showcase talented artists and foster a vibrant creative community. Together, we celebrate the power of art to transcend boundaries and inspire. Join us on this journey of exploration, expression, and connection. Lets create a legacy that inspires generations to come.
                    </motion.p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md" ref={storyRef}>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <motion.img
                                className="md:block hidden"
                                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                                alt="Elijah featured img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls}
                            />
                            <motion.img
                                className="md:hidden block"
                                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                                alt="Elijah featured img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls}
                            />

                            <motion.p
                                className="font-medium text-xl leading-5 text-gray-800 mt-4"
                                variants={textVariants}
                                initial="hidden"
                                animate={storyControls}
                            >Alexa </motion.p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <motion.img className="md:block hidden"
                                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                                alt="Olivia featured Img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls}
                            />
                            <motion.img className="md:hidden block"
                                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                                alt="Olivia featured Img "
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls}
                            />
                            <motion.p className="font-medium text-xl leading-5 text-gray-800 mt-4"
                                variants={textVariants}
                                initial="hidden"
                                animate={storyControls}>Olivia</motion.p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <motion.img className="md:block hidden"
                                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                                alt="Liam featued Img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls}
                            />
                            <motion.img className="md:hidden block"
                                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                                alt="Liam featued Img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls} />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <motion.img className="md:block hidden"
                                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                                alt="Elijah featured img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls} />
                            <motion.img className="md:hidden block"
                                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                                alt="Elijah featured img"
                                variants={imageVariants}
                                initial="hidden"
                                animate={storyControls} />
                            <motion.p className="font-medium text-xl leading-5 text-gray-800 mt-4"
                                variants={textVariants}
                                initial="hidden"
                                animate={storyControls}
                            >Elijah</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;