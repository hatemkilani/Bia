const MindsetSection = () => {
  return (
    <section className="bg-black text-white py-12 px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">Mindset</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Mindset is everything. At Bia, we channel the inner god – a force unshaken by trends, opinions, or limitations. This is the mentality of the sigma, where strength lies in solitude, and power is found within. Forge your destiny, shape your world, and stand above.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center space-x-8">
        {/* Card 1 - Strength */}
        <div className="group flex-1 transform transition-transform duration-300 hover:scale-105 hover:z-10">
          <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-xs mx-auto transform group-hover:scale-105 transition-transform duration-300">
            <img
              src="/STATUE.jpg" // Replace with actual image source
              alt="Strength"
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Strength</h3>
              <p className="text-sm mb-4">
                True strength is built from within. Bia’s collection is crafted to embody resilience, power, and the courage to stand tall, no matter the challenge. Dress like the warrior you are.
              </p>
              <a
                href="/mindset"
                className="bg-[#320707] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 - Focus */}
        <div className="group flex-1 transform transition-transform duration-300 hover:scale-105 hover:z-10">
          <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-xs mx-auto transform group-hover:scale-105 transition-transform duration-300">
            <img
              src="/STATUE3.jpg" // Replace with actual image source
              alt="Focus"
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Focus</h3>
              <p className="text-sm mb-4">
                Mastery begins with focus. Our apparel reflects the clarity of purpose – designed for those who eliminate distractions and remain locked on their goals. Wear the mark of precision.
              </p>
              <a
                href="/mindset"
                className="bg-[#320707] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 - Discipline */}
        <div className="group flex-1 transform transition-transform duration-300 hover:scale-105 hover:z-10">
          <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-xs mx-auto transform group-hover:scale-105 transition-transform duration-300">
            <img
              src="/STATUE2.jpg" // Replace with actual image source
              alt="Discipline"
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Discipline</h3>
              <p className="text-sm mb-4">
                Discipline shapes legends. Our designs remind you that every choice, every action, and every moment is a step toward greatness. Commit to the grind, and let your wardrobe reflect it.
              </p>
              <a
                href="/mindset"
                className="bg-[#320707] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
