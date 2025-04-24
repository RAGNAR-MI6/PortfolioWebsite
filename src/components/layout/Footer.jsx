import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-300">
                            &copy; {new Date().getFullYear()} Rushikesh Patil. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/rushikeshpatil2000" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/rushikesh-patil-b9a4a2201" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com/rushikeshpatil" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com/rushikesh_patil2000" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 