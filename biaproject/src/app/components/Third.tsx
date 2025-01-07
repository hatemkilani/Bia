"use client"; // Mark this as a Client Component

import Link from 'next/link';

const ThirdSection = () => {
  return (
    <section className="bg-black text-white py-24 px-8 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-6">Unlock boundless possibilities</h2>

        {/* Subtitle */}
        <p className="text-lg mb-10">
          Step into a world where limitations don't exist. At Bia, our apparel is more than just clothing – it's your armor for breaking barriers, pushing limits, and embracing the endless potential within. Unlock your full power, and dress to transcend.
        </p>

        {/* Link to Promotions Page */}
        <Link href="/promotions" legacyBehavior>
          <a className="inline-block bg-transparent border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Explore Bia Packs
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ThirdSection;
