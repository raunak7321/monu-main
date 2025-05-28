// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const Whatsapp = () => {
//     return (
//         <a
//             href="https://wa.me/+919827204172?text=I%20am%20interested%20in%20your%20services"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed z-10 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//         >
//             <FaWhatsapp size={24} className="md:w-8 md:h-8" />
//         </a>
//     );
// };

// export default Whatsapp;






// import React from 'react';
// import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

// const SocialIcons = () => {
//     return (
//         <>
//             {/* Facebook Icon */}
//             <a
//                 href="https://www.facebook.com/YourFacebookPage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed z-10 bottom-20 right-4 md:bottom-28 md:right-8 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
//             >
//                 <FaFacebookF size={24} className="md:w-8 md:h-8" />
//             </a>

//             {/* WhatsApp Icon */}
//             <a
//                 href="https://wa.me/+919827204172?text=I%20am%20interested%20in%20your%20services"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed z-10 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//             >
//                 <FaWhatsapp size={24} className="md:w-8 md:h-8" />
//             </a>
//         </>
//     );
// };

// export default SocialIcons;







// import React, { useState } from 'react';
// import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

// const SocialIcons = () => {
//     // State to hold the custom WhatsApp message
//     const [whatsappMessage, setWhatsappMessage] = useState('Hello, I have interacted through your website and would like to know more about your services');

//     return (
//         <>
//             {/* Facebook Icon */}
//             <a
//                 href="https://www.facebook.com/YourFacebookPage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed z-10 bottom-20 right-4 md:bottom-28 md:right-8 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
//             >
//                 <FaFacebookF size={24} className="md:w-8 md:h-8" />
//             </a>

//             {/* WhatsApp Icon */}
//             <a
//                 href={`https://wa.me/+919827204172?text=${encodeURIComponent(whatsappMessage)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed z-10 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
//             >
//                 <FaWhatsapp size={24} className="md:w-8 md:h-8" />
//             </a>

//             {/* Input to change the WhatsApp message */}
//             <div className="fixed bottom-24 right-4 md:bottom-32 md:right-8">
//                 <input
//                     type="text"
//                     value={whatsappMessage}
//                     onChange={(e) => setWhatsappMessage(e.target.value)}
//                     placeholder="Enter WhatsApp message"
//                     className="p-2 border rounded-md"
//                 />
//             </div>
//         </>
//     );
// };

// export default SocialIcons;






import React, { useState } from 'react';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const SocialIcons = () => {
    // State to hold the custom WhatsApp message
    const [whatsappMessage] = useState('Hello, I have interacted through your website and would like to know more about your services');

    return (
        <>
            {/* Facebook Icon */}
            <a
                href="https://www.facebook.com/ledlcd.repairing?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed z-10 bottom-20 right-4 md:bottom-28 md:right-8 bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                <FaFacebookF size={24} className="md:w-8 md:h-8" />
            </a>

            {/* WhatsApp Icon */}
            <a
                href={`https://wa.me/+919827204172?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed z-10 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
                <FaWhatsapp size={24} className="md:w-8 md:h-8" />
            </a>
        </>
    );
};

export default SocialIcons;
