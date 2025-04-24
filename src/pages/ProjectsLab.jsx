import { motion } from 'framer-motion';
import { FaFlask, FaArrowLeft, FaLightbulb, FaClock, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsLab = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        y: [0, 20, 0],
                        x: [0, -20, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute top-1/3 -left-20 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        y: [0, -30, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        y: [0, -10, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            {/* Navbar */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-start items-center">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/#projects" className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                                <FaArrowLeft className="mr-2" />
                                <span className="font-medium">Back to portfolio</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-4">
                            <motion.div
                                className="relative"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <FaFlask className="text-5xl text-indigo-600 dark:text-indigo-400" />
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    animate={{
                                        boxShadow: ["0 0 0 0 rgba(99,102,241,0.4)", "0 0 0 10px rgba(99,102,241,0)", "0 0 0 0 rgba(99,102,241,0)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">
                            Project Lab
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Welcome to my creative workspace where ideas transform into amazing projects
                        </p>
                    </motion.div>

                    {/* Journey Timeline */}
                    <motion.div
                        className="relative mb-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded" />

                        {/* Idea Phase */}
                        <motion.div
                            className="relative mb-16"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 flex md:justify-end">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
                                        <div className="flex items-center mb-3">
                                            <FaLightbulb className="text-yellow-500 text-2xl mr-3" />
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Ideation
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Every great project starts with an idea. In this phase, I'm brainstorming concepts, researching technologies, and planning the architecture for upcoming projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-600 flex items-center justify-center"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                                    </motion.div>
                                </div>
                                <div className="md:w-1/2 md:pl-8" />
                            </div>
                        </motion.div>

                        {/* Development Phase */}
                        <motion.div
                            className="relative mb-16"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 order-2 md:order-1" />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-600 flex items-center justify-center"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    >
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                                    </motion.div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 order-1 md:order-2">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
                                        <div className="flex items-center mb-3">
                                            <FaClock className="text-purple-500 text-2xl mr-3" />
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Development
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            From concept to code, this is where I build the foundation and bring ideas to life. Currently developing innovative solutions with cutting-edge technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Launch Phase */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 flex md:justify-end">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
                                        <div className="flex items-center mb-3">
                                            <FaRocket className="text-blue-500 text-2xl mr-3" />
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Launch
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            The final destination - where projects are polished, tested, and deployed. Check back soon to see my latest launches!
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-600 flex items-center justify-center"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    >
                                        <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                                    </motion.div>
                                </div>
                                <div className="md:w-1/2 md:pl-8" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
                        <p className="mb-6 max-w-2xl mx-auto">
                            I'm always open to new opportunities and creative collaborations. If you have an exciting project or idea, let's build something amazing together!
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/#contact" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-medium shadow-md">
                                Get in touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsLab; 