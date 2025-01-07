"use client"; // Ensure client-side rendering for the component

import { FaDiscord, FaTiktok, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section
      className="text-white py-16 px-8 min-h-screen"
      style={{
        background: "linear-gradient(to bottom, black, #320707)", // Gradient from black to dark red
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          Contact Us
        </h2>
        <p className="text-xl mt-6 max-w-2xl mx-auto leading-relaxed text-gray-300">
          We'd love to hear from you! Please fill out the form below or use the contact information provided. Let's connect and build something legendary.
        </p>
      </div>

      {/* Community Plans */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-2xl font-semibold leading-relaxed text-gray-300">
          Everyone is welcome to our community. Let’s build something legendary together! Whether you're seeking advice,
          training, or just want to connect with like-minded individuals, our community provides a platform for growth,
          strength, and independence. Join us on our social media platforms to stay updated on the latest plans, exclusive content,
          and upcoming events tailored just for you.
        </p>
      </div>

      {/* Social Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 text-center mx-auto max-w-5xl">
        {/* Discord */}
        <div className="flex flex-col items-center bg-[#5b0c0c] p-10 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <FaDiscord size={60} className="mb-4 text-white" />
          <h3 className="text-3xl font-bold">Discord</h3>
          <p className="text-lg mt-2 text-gray-200">Join our server for real-time chats, updates, and exclusive content.</p>
        </div>

        {/* TikTok */}
        <div className="flex flex-col items-center bg-[#5b0c0c] p-10 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <FaTiktok size={60} className="mb-4 text-white" />
          <h3 className="text-3xl font-bold">TikTok</h3>
          <p className="text-lg mt-2 text-gray-200">Follow us for quick tips, stories, and behind-the-scenes content.</p>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center bg-[#5b0c0c] p-10 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <FaInstagram size={60} className="mb-4 text-white" />
          <h3 className="text-3xl font-bold">Instagram</h3>
          <p className="text-lg mt-2 text-gray-200">Check out our latest posts and stories on fitness, fashion, and more.</p>
        </div>

        {/* Twitter and Facebook in a centered row */}
        <div className="md:col-span-3 flex justify-center space-x-12 mt-8">
          {/* Twitter */}
          <div className="flex flex-col items-center bg-[#5b0c0c] p-10 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaTwitter size={60} className="mb-4 text-white" />
            <h3 className="text-3xl font-bold">Twitter</h3>
            <p className="text-lg mt-2 text-gray-200">Stay informed with our daily tweets and community updates.</p>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center bg-[#5b0c0c] p-10 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaFacebook size={60} className="mb-4 text-white" />
            <h3 className="text-3xl font-bold">Facebook</h3>
            <p className="text-lg mt-2 text-gray-200">Join our Facebook page to connect with our growing community.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="bg-white text-black p-10 rounded-xl shadow-2xl mt-16 mx-auto max-w-3xl">
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="py-4 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#5b0c0c]"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-4 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#5b0c0c]"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="py-4 px-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#5b0c0c]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#5b0c0c] text-white py-4 px-12 rounded-full font-bold text-lg hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
