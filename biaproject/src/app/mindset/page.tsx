"use client"; // Ensure client-side rendering for the component

import { motion } from 'framer-motion'; // Framer Motion for animations
import Image from 'next/image';

const MindsetPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#320707] to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            BIA Mindset
          </h1>
          <p className="mt-4 text-2xl text-gray-300">
            Channel the inner god. Stand unshaken. Forge your destiny.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Sigma Mentality
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          At Bia, we channel the mentality of the sigma, where strength lies in solitude and power is found within. This mindset allows you to forge your destiny, shape your world, and rise above limitations. We believe true power comes from within, unshaken by trends or opinions.
        </motion.p>
      </section>

      {/* Card Section with Animation */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto pb-20">
        {[
          { title: "Strength", image: "/STATUE.jpg", text: "Resilience, power, and courage. Dress like the warrior you are." },
          { title: "Focus", image: "/STATUE3.jpg", text: "Mastery begins with focus. Eliminate distractions and stay locked on your goals." },
          { title: "Discipline", image: "/STATUE2.jpg", text: "Discipline shapes legends. Commit to the grind, and let your wardrobe reflect it." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative group transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover rounded-t-2xl"
                width={400}
                height={300}
              />
              <div className="bg-white text-black p-6 min-h-[150px] rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Closing Quote Section */}
      <section className="py-20 bg-black">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl italic font-semibold text-gray-300">
            "Strength, focus, and discipline are not just traits, but the essence of a higher self."
          </p>
          <span className="block mt-4 text-lg text-gray-500">— BIA Philosophy</span>
        </motion.div>
      </section>
    </div>
  );
};

export default MindsetPage;
