import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Using EmailJS to send email
        emailjs.sendForm(
            'service_u1sc5hi', // Replace with your EmailJS service ID
            'template_xzpxw3e', // Replace with your EmailJS template ID
            formRef.current,
            'k8Gw7Ute_6MHF9n5K' // Replace with your EmailJS public key
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSubmitting(false);
                setSubmitted(true);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setSubmitted(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setIsSubmitting(false);
                setError('Failed to send message. Please try again later.');
            });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section id="contact" className="py-20 bg-grid-pattern relative">
            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 opacity-95"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Have a question or want to work together? Send me a message!
                    </motion.p>
                </div>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
                    <motion.div
                        className="relative mb-12 lg:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            className="space-y-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        rushikeshpatil2100@gmail.com
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <FaPhone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        +91 90967 58102
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" variants={itemVariants}>
                                <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <FaMapMarkerAlt className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        Pune, Maharashtra, India
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 sm:p-8 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        {submitted ? (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            times: [0, 0.5, 1],
                                            repeat: 1
                                        }}
                                    >
                                        <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">Thank you!</h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Your message has been sent successfully. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div variants={itemVariants}>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md p-2 transition-all duration-200 hover:border-indigo-300"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md p-2 transition-all duration-200 hover:border-indigo-300"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Subject
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md p-2 transition-all duration-200 hover:border-indigo-300"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md p-2 transition-all duration-200 hover:border-indigo-300"
                                            />
                                        </div>
                                    </motion.div>

                                    {error && (
                                        <motion.div
                                            variants={itemVariants}
                                            className="mt-4 text-red-600 dark:text-red-400 text-sm"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {error}
                                        </motion.div>
                                    )}

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`inline-flex justify-center items-center w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 