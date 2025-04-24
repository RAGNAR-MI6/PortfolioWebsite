import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import profileImage from '../../assets/profile-image.jpg';

const Hero = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [imageSize, setImageSize] = useState({ width: 0, height: 0, aspectRatio: 1 });
    const imageRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate proper image dimensions once it's loaded
    useEffect(() => {
        const img = new Image();
        img.src = profileImage;

        img.onload = () => {
            const aspectRatio = img.width / img.height;
            setImageSize({
                width: img.width,
                height: img.height,
                aspectRatio: aspectRatio
            });
        };
    }, []);

    // Calculate container dimensions based on screen size and image aspect ratio
    const getContainerDimensions = () => {
        let width, height;
        const maxWidth = windowSize.width < 1024 ? Math.min(windowSize.width * 0.8, 400) : Math.min(windowSize.width * 0.35, 500);

        if (imageSize.aspectRatio > 1) {
            // Landscape image
            width = maxWidth;
            height = maxWidth / imageSize.aspectRatio;
        } else {
            // Portrait or square image
            height = windowSize.width < 1024 ? Math.min(windowSize.width * 0.8, 500) : Math.min(windowSize.width * 0.45, 600);
            width = height * imageSize.aspectRatio;
        }

        return { width, height };
    };

    const dimensions = getContainerDimensions();

    return (
        <section className="relative bg-white dark:bg-gray-900 py-20 sm:py-28 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2 }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-indigo-500 rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, x: -20 }}
                        animate={{
                            scale: 1,
                            x: 0,
                            y: [0, Math.random() * 10 - 5],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.1,
                            y: {
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }
                        }}
                    />
                ))}
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.span
                                    className="block"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Hi, I'm
                                </motion.span>
                                <motion.span
                                    className="block text-indigo-600 dark:text-indigo-400"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Rushikesh Patil
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                A passionate Software Developer specializing in Java, Python, and web technologies with experience in Machine Learning and AI. I develop scalable and innovative solutions that drive impactful results.
                            </motion.p>
                            <motion.div
                                className="mt-8 sm:mt-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <div className="flex justify-center lg:justify-start space-x-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/projects"
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            View Projects
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Contact Me
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
                        <motion.div
                            className="relative mx-auto lg:mx-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                width: dimensions.width,
                                height: dimensions.height,
                                maxWidth: '100%'
                            }}
                        >
                            <motion.div
                                className="w-full h-full rounded-xl shadow-xl overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Gradient overlay effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 mix-blend-multiply opacity-0"
                                    animate={{
                                        opacity: [0, 0.15, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />

                                {/* Border glow effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0 0px rgba(99,102,241,0)",
                                            "0 0 0 3px rgba(99,102,241,0.3)",
                                            "0 0 0 0px rgba(99,102,241,0)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                />

                                {/* Actual image */}
                                <motion.div className="w-full h-full rounded-xl overflow-hidden">
                                    <motion.img
                                        ref={imageRef}
                                        className="w-full h-full object-contain"
                                        src={profileImage}
                                        alt="Rushikesh Patil - Software Developer"
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 