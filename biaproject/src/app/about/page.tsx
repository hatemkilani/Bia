"use client";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#410505] text-white py-16 px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold uppercase tracking-wider leading-snug">
          The Essence of Power
        </h1>
        <p className="mt-6 text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          At Bia, we channel the divine energy of the Greek gods into every design and program. Our premium apparel and personalized coaching are crafted to make you feel unstoppable.
        </p>
        {/* Signature Line */}
        <p className="mt-4 italic text-lg text-gray-400">"Where strength meets elegance."</p>
      </section>

      {/* Divider with Line */}
      <div className="relative mb-16">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
          <hr className="border-t border-gray-600 w-11/12 mx-auto" />
        </div>
        <h2 className="relative z-10 bg-[#410505] px-4 text-4xl font-semibold mx-auto inline-block uppercase tracking-wider">
          Our Story
        </h2>
      </div>

      {/* Brand Story */}
      <section className="mb-16 text-center max-w-5xl mx-auto">
        <p className="text-xl leading-relaxed">
          Founded on the principles of strength and independence, Bia is more than a brand – it’s a mindset. Born from the ancient Greek philosophy of embodying personal power, our mission is simple: to help you become your greatest version. Whether through our handcrafted apparel or elite coaching, every piece and every program is designed to amplify your potential.
        </p>
        {/* Quote with Author */}
        <blockquote className="mt-8 italic text-2xl font-light text-gray-400">
          "The pursuit of excellence begins from within."
        </blockquote>
      </section>

      {/* Image Section with Quote */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/luxury-background.jpg')" }}></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="bg-[#410505] bg-opacity-80 p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-extrabold italic">"Strength Lies Within"</h3>
            <p className="mt-4 text-lg tracking-wide text-gray-200">
              Every garment, every session, every moment at Bia is about crafting resilience from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#410505] p-8 rounded-lg text-left shadow-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-2xl font-bold">Resilience</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Our apparel is built to withstand the most challenging conditions. Engineered with high-quality fabrics, each piece supports your journey of growth.
            </p>
          </div>
          <div className="bg-[#410505] p-8 rounded-lg text-left shadow-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-2xl font-bold">Performance</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Every item is crafted with precision, designed for peak performance. Whether it's your workout or everyday routine, our gear keeps you moving forward.
            </p>
          </div>
          <div className="bg-[#410505] p-8 rounded-lg text-left shadow-lg hover:bg-opacity-90 transition-all duration-300">
            <h3 className="text-2xl font-bold">Empowerment</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              With our coaching, you won’t just change your body – you’ll transform your mindset. Unlock boundless potential and rise above limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative text-center mb-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/mission-background.jpg')" }}></div>
        <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl leading-relaxed text-gray-300">
            We are dedicated to empowering the individual. Whether through our premium clothing line or expert coaching services, our goal is to elevate your physical and mental resilience. At Bia, we believe that true strength starts from within.
          </p>
          {/* Quote with Signature */}
          <p className="mt-6 text-lg italic text-gray-400">"Where excellence meets determination." <span className="block mt-2 font-semibold text-white">— Bia Founder</span></p>
        </div>
      </section>

      {/* Luxurious Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold mb-8">Join the Bia Revolution</h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-6">
          Take control of your destiny. Whether you're looking for high-performance gear or life-changing coaching, Bia has what you need to unleash your greatness.
        </p>
        <a
          href="/products"
          className="bg-gradient-to-r from-[#410505] to-black text-white py-4 px-16 rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
