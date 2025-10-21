
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
                 
                    <div className="text-3xl font-black mb-4 md:mb-0 flex">
                         <img 
                            src="/assets/logo.png" 
                            alt="Hero IO Logo" 
                            className="w-8 h-8 object-contain" 
                        />
                        <span className="text-2xl font-extrabold text-primary">
                            Hero.io
                        </span> 
                    </div>
                    
                    
                    <div className="flex space-x-6 items-center">
                        <span className="text-lg font-semibold text-gray-400 hidden sm:block">Connect With Us:</span>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>

             
                <div className="text-center text-sm text-gray-500 pt-4">
                  The page you are looking for is not available.
                </div>
            </div>
        </footer>
    );
};

export default Footer;