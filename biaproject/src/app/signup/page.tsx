"use client"; // Ensure client-side rendering for the component

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Signup = () => {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2b2b] to-[#320707] text-white py-12 px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5b0c0c] via-transparent to-[#410505] opacity-50 pointer-events-none"></div>
      
      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-2xl relative z-10 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-center text-[#410505] mb-8">
          Join Us
        </h1>
        
        {/* Show the selected plan */}
        {selectedPlan && (
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#5b0c0c]">
              You Selected: {selectedPlan}
            </h2>
          </div>
        )}

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-800">Name</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b0c0c] transition"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-800">Email</label>
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b0c0c] transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-800">Phone</label>
            <input
              type="tel"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b0c0c] transition"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-800">Address</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b0c0c] transition"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5b0c0c] text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition transform hover:scale-105 focus:scale-105 focus:bg-opacity-90"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Floating Stars / Orbs for Euphoric Effect */}
      <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#ffeb3b] to-[#ff5722] opacity-75 blur-xl animation-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#ff5722] to-[#5b0c0c] opacity-75 blur-2xl animation-pulse"></div>
    </div>
  );
};

export default Signup;
