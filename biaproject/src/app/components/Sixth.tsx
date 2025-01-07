"use client"; // Ensure client-side rendering for the component

import React from "react";

const Sixth = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-200">Why us?</h2>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-16">
        {/* Card 1 - Aura */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/Aura.jpg" // Exact case-sensitive filename
            alt="Aura"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">Aura</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Exude confidence and strength with every piece you wear.
          </p>
        </div>

        {/* Card 2 - Prestige */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/Prestige.jpg" // Exact case-sensitive filename
            alt="Prestige"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">Prestige</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Wear the mark of greatness and stand above the rest.
          </p>
        </div>

        {/* Card 3 - Quality */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/Quality.jpg" // Exact case-sensitive filename
            alt="Quality"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-bold">Quality</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Top-tier fabrics, crafted for durability and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sixth;
