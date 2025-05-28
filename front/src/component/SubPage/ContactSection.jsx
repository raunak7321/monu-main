import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    message: '',
    service: '',
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/contact/send-mail`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log('Message sent:', response.data);
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', mobile: '', email: '', address: '', city: '', message: '', service: '', photo: null });
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-[#F7EAD0] w-full font-serif py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold font-serif text-[#BB1E4B] mb-4">Contact Monu Electronics</h2>
          <p className="text-base text-[#BB1E4B] font-serif">
            Reach out to us with any questions or inquiries!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Section */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="bg-white p-8 rounded-lg shadow-md text-start text-[#3e2015]">
              <h3 className="text-2xl font-semibold mb-4 text-center text-[#BB1E4B] font-serif">Contact Info</h3>
              <p className="mb-2">Name: Monu Electronics</p>
              <p className="mb-2">Working hours: 9:00 AM to 9:00 PM</p>
              <p className="mb-2">Mobile: <a href="tel:+919827204172" className="text-gray-800 hover:underline">+91 9827204172</a></p>
              <p className="mb-2">Mobile: <a href="tel:+917000387347" className="text-gray-800 hover:underline">+91 7000387347</a></p>
              <p className="mb-2">Email: <a href="mailto:mukeshprajapati4172@gmail.com" className="text-gray-800 hover:underline">mukeshprajapati4172@gmail.com</a></p>
              <p>Location: <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">123 Electronics Avenue, City, Country</a></p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-4 font-serif text-[#BB1E4B]">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.674894945488!2d77.38760777525216!3d23.21851570898781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c430edd6a59b1%3A0xb6ef791e875c8575!2sMonu%20Electronics!5e0!3m2!1sen!2sin!4v1727869374240!5m2!1sen!2sin"
                width="100%"
                height="320"
                className="rounded-lg shadow-lg border-0"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="space-y-4" data-aos="fade-down">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3 font-serif text-[#BB1E4B] text-center">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  type="number"
                  placeholder="Enter Your Mobile Number"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  type="text"
                  placeholder="Enter Your Address"
                  required
                />
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  type="text"
                  placeholder="City"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  required
                >
                   <option value="">Select Service</option>
                   <option value="LED TV Repair">LED TV Repair</option>
                   <option value="LCD TV Repair">LCD TV Repair</option>
                   {/* <option value="Plasma TV Repair">Plasma TV Repair</option> */}
                   <option value="Smart TV Repair">Smart TV Repair</option>
                   <option value="Display Problem">Display Problem</option>
                   <option value="Sound Problem">Sound Problem</option>
                   {/* <option value="TV Installation">TV Installation</option> */}
                   <option value="LED LCD Mother Board Repairing">LED LCD Mother Board Repairing</option>
                   <option value="LED LCD Power Supply Repairing">LED LCD Power Supply Repairing</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                  placeholder="Type Your Message.."
                  rows="3"
                  required
                ></textarea>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className={`bg-[#BB1E4B] text-white px-6 py-3 rounded-lg transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              {successMessage && <p className="text-green-600 pt-4 text-center">{successMessage}</p>}
              {errorMessage && <p className="text-red-600 pt-4 text-center">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
