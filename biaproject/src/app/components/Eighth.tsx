"use client"; // Ensure client-side rendering for the component

import React from "react";

const Eighth = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-200">Contacts</h2>
      </div>

      {/* Content */}
      <div className="flex justify-center space-x-16">
        {/* Left Side - Contact Information */}
        <div className="bg-[#320707] p-8 rounded-lg text-left max-w-sm">
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
          <p className="mb-2">
            <span className="font-bold">Phone: </span>
            <a href="tel:+08001234567" className="text-white">0 (800) 123 45 67</a>
          </p>
          <p className="mb-2">
            <span className="font-bold">WhatsApp: </span>
            <a href="tel:+08001234567" className="text-white">0 (800) 123 45 67</a>
          </p>
          <p className="mb-2">
            <span className="font-bold">Email: </span>
            <a href="mailto:info@site.com" className="text-white">Bia@gmail.com</a>
          </p>

          {/* Address and Working Hours */}
          <div className="mt-6">
            <p className="text-gray-400">Address:</p>
            <p className="text-white">Akouda, Sousse, Ak 4022</p>
            <p className="text-gray-400 mt-4">Working hours:</p>
            <p className="text-white">9:00AM - 6:00PM</p>
          </div>
        </div>

        {/* Right Side - Map Embed */}
        <div className="rounded-lg overflow-hidden max-w-lg w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25829.035441541424!2d10.56370794939266!3d35.86169529902621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13028f0c5b182ddb%3A0x2c0bc472b183cfc2!2sAkouda!5e0!3m2!1sen!2stn!4v1695121481542!5m2!1sen!2stn"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Eighth;
