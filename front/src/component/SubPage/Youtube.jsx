import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Youtube = () => {
    return (
        <a
            href="http://www.youtube.com/@MukeshPrajapati-d2c"
            className="fixed z-10 bottom-4 left-4 md:bottom-8 md:left-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
            <FaYoutube size={24} className="md:w-8 md:h-8" />
        </a>
    );
};

export default Youtube;
