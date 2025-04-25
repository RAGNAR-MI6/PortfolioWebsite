import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaReply, FaCalendarCheck, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    });
    const [validations, setValidations] = useState({
        name: true,
        email: true,
        subject: true,
        message: true,
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Validation rules
    const validationRules = {
        name: (value) => value.trim().length >= 2,
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        subject: (value) => value.trim().length >= 3,
        message: (value) => value.trim().length >= 10,
    };

    // Validation messages
    const validationMessages = {
        name: 'Name must be at least 2 characters',
        email: 'Please enter a valid email address',
        subject: 'Subject must be at least 3 characters',
        message: 'Message must be at least 10 characters',
    };

    // Check overall form validity
    useEffect(() => {
        const isValid = Object.keys(validations).every(key => validations[key]);
        const isComplete = Object.keys(formData).every(key => formData[key].trim() !== '');
        setIsFormValid(isValid && isComplete);
    }, [formData, validations]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate on change if field has been touched
        if (touched[name]) {
            setValidations(prev => ({
                ...prev,
                [name]: validationRules[name](value)
            }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setValidations(prev => ({
            ...prev,
            [name]: validationRules[name](formData[name])
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Set all fields as touched and validate
        const touchedState = Object.keys(touched).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(touchedState);

        const validationState = Object.keys(validations).reduce((acc, key) => {
            acc[key] = validationRules[key](formData[key]);
            return acc;
        }, {});
        setValidations(validationState);

        // Check if form is valid
        const isValid = Object.values(validationState).every(Boolean);

        if (!isValid) {
            setError('Please fix the validation errors before submitting.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        // Get current date and time for the email
        const now = new Date();
        const timeString = now.toLocaleString();

        // Using EmailJS to send email (notification to you)
        emailjs.sendForm(
            'service_u1sc5hi', // Your EmailJS service ID
            'template_xzpxw3e', // Your EmailJS template ID for notifications
            formRef.current,
            'k8Gw7Ute_6MHF9n5K' // Your EmailJS public key
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);

                // Send auto-reply email to the user
                emailjs.send(
                    'service_u1sc5hi', // Your EmailJS service ID
                    'template_0ot8vtp', // Your EmailJS template ID for auto-replies
                    {
                        name: formData.name.split(' ')[0],
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        time: timeString
                    },
                    'k8Gw7Ute_6MHF9n5K' // Your EmailJS public key
                )
                    .then((response) => {
                        console.log('Auto-reply sent successfully:', response.text);
                    })
                    .catch((error) => {
                        console.error('Failed to send auto-reply:', error.text);
                    });

                setIsSubmitting(false);
                setSubmitted(true);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setSubmitted(false);
                    setTouched({
                        name: false,
                        email: false,
                        subject: false,
                        message: false,
                    });
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
                            <motion.div
                                className="py-8 overflow-hidden relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Background decorative elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full -mr-12 -mt-12 z-0"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100 dark:bg-green-900/20 rounded-full -ml-16 -mb-16 z-0"></div>

                                {/* Success icon with animation */}
                                <motion.div
                                    className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg relative z-10"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: [0.8, 1.2, 1],
                                        opacity: 1,
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        times: [0, 0.6, 0.8, 1],
                                        ease: "easeInOut"
                                    }}
                                >
                                    <svg className="h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>

                                {/* Success message with animation */}
                                <motion.div
                                    className="text-center mt-6 relative z-10"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                                        Message Received!
                                    </h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300 font-medium">
                                        Thanks for reaching out, {formData.name.split(' ')[0]}!
                                    </p>
                                </motion.div>

                                {/* Information cards */}
                                <motion.div
                                    className="mt-8 grid gap-4 relative z-10"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 flex items-start shadow-md border border-indigo-100 dark:border-indigo-700/30"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="bg-indigo-100 dark:bg-indigo-800 p-2 rounded-full mr-4">
                                            <FaReply className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Quick Response</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                I'll review your message promptly and get back to you.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 flex items-start shadow-md border border-purple-100 dark:border-purple-700/30"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded-full mr-4">
                                            <FaCalendarCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Next Steps</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                If needed, we can schedule a call to discuss your project requirements.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex items-start shadow-md border border-green-100 dark:border-green-700/30"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                    >
                                        <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full mr-4">
                                            <FaClock className="h-5 w-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Response Time</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                I typically respond within 24 hours during business days.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Return to form button with animation */}
                                <motion.button
                                    className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative z-10"
                                    onClick={() => setSubmitted(false)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Another Message
                                </motion.button>
                            </motion.div>
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
                                        <div className="mt-1 relative">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md p-2 transition-all duration-200 hover:border-indigo-300
                                                ${touched.name && !validations.name ?
                                                        'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20' :
                                                        touched.name && validations.name ?
                                                            'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20' :
                                                            'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                                                    }`}
                                                placeholder="John Doe"
                                            />
                                            {touched.name && validations.name && (
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
                                                    <FaCheckCircle />
                                                </div>
                                            )}
                                        </div>
                                        {touched.name && !validations.name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationMessages.name}</p>
                                        )}
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <div className="mt-1 relative">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md p-2 transition-all duration-200 hover:border-indigo-300
                                                ${touched.email && !validations.email ?
                                                        'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20' :
                                                        touched.email && validations.email ?
                                                            'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20' :
                                                            'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                                                    }`}
                                                placeholder="john.doe@example.com"
                                            />
                                            {touched.email && validations.email && (
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
                                                    <FaCheckCircle />
                                                </div>
                                            )}
                                        </div>
                                        {touched.email && !validations.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationMessages.email}</p>
                                        )}
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Subject
                                        </label>
                                        <div className="mt-1 relative">
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md p-2 transition-all duration-200 hover:border-indigo-300
                                                ${touched.subject && !validations.subject ?
                                                        'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20' :
                                                        touched.subject && validations.subject ?
                                                            'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20' :
                                                            'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                                                    }`}
                                                placeholder="Project Inquiry"
                                            />
                                            {touched.subject && validations.subject && (
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
                                                    <FaCheckCircle />
                                                </div>
                                            )}
                                        </div>
                                        {touched.subject && !validations.subject && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationMessages.subject}</p>
                                        )}
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </label>
                                        <div className="mt-1 relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md p-2 transition-all duration-200 hover:border-indigo-300
                                                ${touched.message && !validations.message ?
                                                        'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20' :
                                                        touched.message && validations.message ?
                                                            'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20' :
                                                            'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                                                    }`}
                                                placeholder="Your message here..."
                                            />
                                            {touched.message && validations.message && (
                                                <div className="absolute right-2 top-4 text-green-500">
                                                    <FaCheckCircle />
                                                </div>
                                            )}
                                        </div>
                                        {touched.message && !validations.message && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationMessages.message}</p>
                                        )}
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
                                            disabled={isSubmitting || !isFormValid}
                                            className={`inline-flex justify-center items-center w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                                            ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            whileHover={isFormValid ? { scale: 1.03 } : {}}
                                            whileTap={isFormValid ? { scale: 0.98 } : {}}
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