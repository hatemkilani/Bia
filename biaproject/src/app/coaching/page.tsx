"use client"; // Ensures this component runs on the client-side

import Link from 'next/link';
import { useState, useRef } from 'react';

const Coaching = () => {
  // Mock pricing plans for coaching programs
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "29.99TND / month",
      features: ["2 Personal Training Sessions", "Customized Nutrition Plan", "Email Support"],
      popular: false,
    },
    {
      id: 2,
      title: "Standard Plan",
      price: "49.99TND / month",
      features: ["5 Personal Training Sessions", "Weekly Check-ins", "Premium Nutrition Plan", "Phone & Email Support"],
      popular: true, // Highlight this plan
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "79.99TND / month",
      features: ["Unlimited Personal Training", "Daily Check-ins", "Advanced Nutrition Plan", "24/7 Support"],
      popular: false,
    },
  ];

  // Ref for the pricing section
  const pricingRef = useRef<HTMLDivElement | null>(null);

  // Scroll to pricing section
  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ section state for collapsible questions
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle open/close for FAQ items
  };

  return (
    <div className="bg-gradient-to-b from-black to-[#410505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] bg-[url('/your-coaching-background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Unlock Your Full Potential</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Tailored coaching programs designed to elevate your performance.
          </p>
          {/* Start Now button scrolls to pricing plans */}
          <button
            onClick={scrollToPricing}
            className="mt-8 inline-block bg-[#5b0c0c] py-4 px-8 rounded-full text-white font-bold hover:bg-opacity-90 transition"
          >
            Start Now
          </button>
        </div>
      </section>

      {/* Coaching Programs Section */}
      <section className="py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Coaching Programs</h2>
          <p className="text-gray-300 text-lg mt-4">
            Choose a program that fits your goals and start your transformation journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1: Strength Training */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-4">Strength Training</h3>
            <p className="text-gray-600 mb-4">
              Build muscle and improve strength with customized training programs designed for all levels.
            </p>
            <Link href="/coaching/strength" legacyBehavior>
              <a className="inline-block bg-[#5b0c0c] text-white py-2 px-4 rounded-full">Learn More</a>
            </Link>
          </div>

          {/* Program 2: Endurance & Cardio */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-4">Endurance & Cardio</h3>
            <p className="text-gray-600 mb-4">
              Boost your endurance and cardiovascular health with personalized cardio training plans.
            </p>
            <Link href="/coaching/cardio" legacyBehavior>
              <a className="inline-block bg-[#5b0c0c] text-white py-2 px-4 rounded-full">Learn More</a>
            </Link>
          </div>

          {/* Program 3: Nutrition Coaching */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-4">Nutrition Coaching</h3>
            <p className="text-gray-600 mb-4">
              Optimize your diet with expert nutrition coaching tailored to your fitness goals.
            </p>
            <Link href="/coaching/nutrition" legacyBehavior>
              <a className="inline-block bg-[#5b0c0c] text-white py-2 px-4 rounded-full">Learn More</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-black py-16 px-8" ref={pricingRef}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Pricing Plans</h2>
          <p className="text-lg text-gray-300 mt-4">Affordable plans for every fitness journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg shadow-lg transition ${
                plan.popular ? "bg-[#5b0c0c] text-white" : "bg-white text-black"
              }`}
            >
              {plan.popular && (
                <span className="text-sm font-bold uppercase bg-yellow-500 text-black px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>
              <p className="text-lg mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/signup?plan=${plan.title}`} legacyBehavior>
                <a className="block bg-[#410505] text-white py-3 px-6 rounded-full text-center font-bold hover:bg-opacity-90 transition">
                  Get Started
                 </a>
               </Link>

            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 mt-4">
            Find answers to common questions about our coaching programs and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {[
            "How do I sign up for a program?",
            "Can I change my plan later?",
            "Are nutrition plans included?",
            "What is the refund policy?",
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-[#5b0c0c] text-white py-4 px-6 rounded-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {question}
              </button>
              {openFAQ === index && (
                <div className="p-4 bg-gray-900 text-gray-200 rounded-lg mt-2">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum at augue ut ullamcorper.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-[#410505] text-center">
        <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Life?</h3>
        <p className="text-lg text-gray-300 mb-8">
          Join one of our coaching programs today and take the first step toward your fitness goals.
        </p>
        <Link href="/signup" legacyBehavior>
          <a className="inline-block bg-white text-[#5b0c0c] py-4 px-8 rounded-full font-bold hover:bg-opacity-90 transition">
            Get Started
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Coaching;
