import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGitAlt, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiSelenium } from 'react-icons/si';

const skills = [
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-[#FF6F00]" /> },
    { name: 'Selenium', icon: <SiSelenium className="text-[#43B02A]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'SQL', icon: <FaDatabase className="text-[#336791]" /> },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <motion.div
                    className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-indigo-300 dark:bg-indigo-700"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 15, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-600"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -10, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
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
                        About Me
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Get to know more about me and my skills
                    </motion.p>
                </div>

                <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            My Journey
                        </motion.h3>
                        <motion.div
                            className="mt-4 text-gray-600 dark:text-gray-400 space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.p variants={fadeInUp}>
                                I am a passionate Software Developer with a strong focus on creating innovative and scalable solutions. My journey in software development started during my B.Tech. in Computer Science & Engineering at MIT ADT - School of Engineering in Pune, which I completed in 2024.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                Currently, I'm working as a Software Developer at QuantaSIP Geomatic Informative Solutions Pvt Ltd in Pune, where I've been redesigning UI using React and Tailwind CSS, integrating the Segment Anything Model (SAM) for automated Khasra boundary marking, and optimizing database performance.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                My professional focus includes working with Java, Python, React, PostgreSQL, and developing Machine Learning solutions. I'm always excited to take on new challenges and opportunities to expand my knowledge and skills.
                            </motion.p>
                        </motion.div>

                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Education
                        </motion.h3>
                        <motion.div
                            className="mt-4 text-gray-600 dark:text-gray-400 space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div variants={fadeInUp}>
                                <h4 className="font-semibold">MIT ADT - School of Engineering, Pune</h4>
                                <p>B.Tech. in Computer Science & Engineering | 2020 – 2024</p>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <h4 className="font-semibold">Nutan Jr. Science College</h4>
                                <p>12th in Science | 2018 – 2020</p>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <h4 className="font-semibold">Rotary English School</h4>
                                <p>10th in CBSE | 2017 – 2018</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-10 lg:mt-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            My Skills
                        </motion.h3>
                        <motion.div
                            className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md flex flex-col items-center"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    variants={fadeInUp}
                                >
                                    <motion.div
                                        className="text-4xl"
                                        animate={{
                                            rotateY: [0, 360],
                                        }}
                                        transition={{
                                            duration: 3,
                                            delay: index * 0.2,
                                            repeat: Infinity,
                                            repeatDelay: 5
                                        }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{skill.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Certifications
                        </motion.h3>
                        <motion.div
                            className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center">
                                <motion.div
                                    className="text-indigo-600 dark:text-indigo-400"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </motion.div>
                                <div className="ml-3">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">IBM - Introduction to Artificial Intelligence (AI)</h4>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 