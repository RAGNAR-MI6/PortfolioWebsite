import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Real Estate Buddy',
        description: 'An online real estate platform that enables buyers and sellers to connect, with optimized UI/UX design resulting in 15% increased user engagement and 20% reduced bounce rate.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        tags: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX Design'],
        github: 'https://github.com/rushikeshpatil2000/real-estate-buddy',
        demo: 'https://real-estate-buddy.example.com',
    },
    {
        id: 2,
        title: 'Fabric Fault Detection',
        description: 'Machine learning model with 92% accuracy to detect fabric defects like missing threads, oil stains, and holes, reducing manual inspection time by 30% and defective products by 5%.',
        image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        tags: ['Python', 'Machine Learning', 'CNN', 'Image Processing'],
        github: 'https://github.com/rushikeshpatil2000/fabric-fault-detection',
        demo: 'https://fabric-fault-detection.example.com',
    },
    {
        id: 3,
        title: 'Segment Anything Model Integration',
        description: 'Integrated SAM with 95% accuracy to automate the marking of over 5,000 Khasra boundaries from satellite imagery, reducing manual effort by 40%.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        tags: ['Python', 'AI', 'Machine Learning', 'GIS'],
        github: 'https://github.com/rushikeshpatil2000/sam-integration',
        demo: 'https://sam-integration.example.com',
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React and Tailwind CSS showcasing my projects, skills and professional experience.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        tags: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
        github: 'https://github.com/rushikeshpatil2000/portfolio',
        demo: 'https://rushikeshpatil.com',
    },
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            duration: 0.6
        }
    }
};

const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    },
    hover: {
        y: -12,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

                <motion.div
                    className="absolute -left-20 -bottom-20 w-72 h-72 bg-indigo-500 rounded-full opacity-[0.07] blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute right-0 top-1/3 w-96 h-96 bg-purple-500 rounded-full opacity-[0.05] blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -10, 0],
                        y: [0, 10, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Check out some of my recent work
                    </motion.p>
                </div>

                <motion.div
                    className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
                            variants={projectVariants}
                            whileHover="hover"
                        >
                            <div className="relative overflow-hidden h-48 group">
                                <motion.div
                                    className="absolute inset-0 bg-indigo-700 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                    whileHover={{ opacity: 0.3 }}
                                />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.div
                                        className="flex space-x-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white p-3 rounded-full shadow-lg text-gray-800"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white p-3 rounded-full shadow-lg text-gray-800"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaExternalLinkAlt className="w-5 h-5" />
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <motion.h3
                                    className="text-lg font-semibold text-gray-900 dark:text-white"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="mt-2 text-gray-600 dark:text-gray-400 flex-grow"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    {project.description}
                                </motion.p>
                                <motion.div
                                    className="mt-4 flex flex-wrap gap-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    {project.tags.map(tag => (
                                        <motion.span
                                            key={tag}
                                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="mt-6 flex justify-between text-sm"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                >
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                        whileHover={{ scale: 1.05, x: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="mr-2" />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                        whileHover={{ scale: 1.05, x: 2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        <span>Demo</span>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 