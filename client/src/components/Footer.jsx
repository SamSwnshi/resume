import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="wallpaper p-4 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Created by text */}
                <p className="text-black text-sm">
                    <span className="text-gray-700">Created by</span> <strong>Sameer Suryawanshi</strong>
                </p>
                {/* Social Media Links */}
                <div className="flex space-x-6 ">
                    <a
                        href="https://www.linkedin.com/in/sameer-suryawanshi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 hover:text-blue-700 transition hover:scale-120 duration-100"
                    >
                        <FaLinkedinIn size={24} />
                    </a>

                    <a
                        href="https://www.instagram.com/_sameer_suryawanshi_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-pink-600 transition hover:scale-120 duration-100"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href="https://github.com/SamSwnshi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 hover:text-black transition hover:scale-120 duration-100"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
