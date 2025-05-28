// import React from 'react';
// import { FaPhoneAlt } from 'react-icons/fa';

// const Call = () => {
//     return (
//         <a
//             href="tel:+919827204172"
//             className="fixed z-10 bottom-4 left-4 md:bottom-8 md:left-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//         >
//             <FaPhoneAlt size={24} className="md:w-8 md:h-8" />
//         </a>
//     );
// };

// export default Call;


import React from 'react';
import { FaYoutube, FaPhoneAlt } from 'react-icons/fa';

const Icons = () => {
    return (
        <>
            {/* YouTube Icon */}
            <a
                href="http://www.youtube.com/@MukeshPrajapati-d2c"
                className="fixed z-10 bottom-20 left-4 md:bottom-28 md:left-8 bg-red-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
            >
                <FaYoutube size={24} className="md:w-8 md:h-8" />
            </a>

            {/* Call Icon */}
            <a
                href="tel:+919827204172"
                className="fixed z-10 bottom-4 left-4 md:bottom-8 md:left-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
                <FaPhoneAlt size={24} className="md:w-8 md:h-8" />
            </a>
        </>
    );
};

export default Icons;
