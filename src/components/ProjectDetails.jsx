import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLock, FaTools, FaCode, FaEye, FaTimes, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ isOpen, onClose, project, status = 'private' }) => {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        if (isOpen && status === 'updating') {
            const timer = setTimeout(() => {
                setProgressValue(Math.min(progressValue + 1, 85));
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isOpen, progressValue, status]);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: { duration: 0.2 }
        }
    };

    const getStatusContent = () => {
        switch (status) {
            case 'private':
                return (
                    <div className="text-center py-8">
                        <motion.div
                            className="inline-block p-6 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-6"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: [0.8, 1.2, 1] }}
                            transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                        >
                            <FaLock className="text-5xl text-indigo-600 dark:text-indigo-400" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Private Project Access</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            This project is currently private. The code and implementation details are confidential and only available for select collaborators.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCode className="mr-2" />
                                <span>View Repository</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/projects-lab"
                                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
                                >
                                    <FaRocket className="mr-2" />
                                    <span>Projects Lab</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                );

            case 'updating':
                return (
                    <div className="text-center py-8">
                        <motion.div
                            className="inline-block p-6 rounded-full bg-amber-100 dark:bg-amber-900 mb-6 relative"
                            animate={{
                                rotate: [0, 10, -10, 10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        >
                            <FaTools className="text-5xl text-amber-600 dark:text-amber-400" />
                            <motion.div
                                className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
                                animate={{
                                    boxShadow: ["0 0 0 0px rgba(251,191,36,0.3)", "0 0 0 10px rgba(251,191,36,0)"],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Under Development</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            This project is actively being updated with new features and improvements. Check back soon to see the completed version!
                        </p>
                        <div className="w-full max-w-md mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progressValue}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Estimated completion: {progressValue}%
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaCode className="mr-2" />
                                <span>View Code</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/projects-lab"
                                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg"
                                >
                                    <FaEye className="mr-2" />
                                    <span>Preview Lab</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative">
                            <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-40"
                                    />
                                </motion.div>
                                <motion.h2
                                    className="text-3xl font-bold text-white relative z-10 text-center px-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                            <motion.button
                                className="absolute top-4 right-4 bg-white bg-opacity-20 text-white p-2 rounded-full"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                            >
                                <FaTimes />
                            </motion.button>
                        </div>

                        <div className="p-6">
                            {getStatusContent()}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetails; 