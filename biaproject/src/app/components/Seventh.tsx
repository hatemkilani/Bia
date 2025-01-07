"use client"; // Ensure client-side rendering for the component

import React from 'react';

const Seventh = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, transparent), url('/bgimage.jpg')`, // Degradation from black to background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-lg w-full text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Form</h1>
        <p className="text-center mb-6 text-gray-300">
          To update your notification email, click on any field below. Submissions are limited to 10 per day without upgrading to the Form Builder.
        </p>
        
        {/* Form */}
        <form className="space-y-4">
          {/* Name and Email in a Row */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-4 rounded-lg text-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 p-4 rounded-lg text-black focus:outline-none"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-4 rounded-lg text-black focus:outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            className="w-full p-4 rounded-lg text-black focus:outline-none resize-none"
            rows={4}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#320707] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Seventh;
