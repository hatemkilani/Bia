"use client"; // Ensure client-side rendering for the component

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Import Swiper modules for navigation

const Fourth = () => {
  const slides = [
    {
      id: 1,
      image: "/signature thirt.jpg", // Correct path for Signature T-shirt image
      description:
        "Our signature T-shirts are designed for both style and performance. Made from high-quality materials, they provide comfort and durability whether you're in the gym or out in the world.",
      author: "Signature T-shirts",
    },
    {
      id: 2,
      image: "/hoodie.jpg", // Correct path for Hoodies image
      description:
        "Stay warm and stylish with our premium hoodies. Crafted for comfort and a perfect fit, they’re great for both training sessions and casual wear.",
      author: "Hoodies",
    },
    {
      id: 3,
      image: "/accesories.jpg", // Correct path for Accessories image
      description:
        "Complete your look with our exclusive accessories. From caps to wristbands, each piece is designed to enhance your style and support your active lifestyle.",
      author: "Accessories",
    },
    {
      id: 4,
      image: "/compression gear.jpg", // Correct path for Compression gear image
      description:
        "Maximize your performance with our compression gear. Designed to enhance muscle recovery and circulation, it's a must-have for serious athletes.",
      author: "Compression gear",
    },
    {
      id: 5,
      image: "/personal trainer.jpg", // Correct path for Fitness coaching plans image
      description:
        "Take your fitness journey to the next level with our personalized coaching plans. Tailored to your goals, our programs are designed to build strength, endurance, and confidence.",
      author: "Fitness coaching plans",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#410505] text-white py-12 px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold">Our Products</h3>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Discover our collection of premium apparel and accessories, crafted for those who embrace strength and independence. Each product is designed to help you stand out and feel powerful in your pursuit of greatness.
        </p>
      </div>

      {/* Products Slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <div className="bg-[#0f0101] text-center rounded-lg overflow-hidden max-w-xs">
              <img
                src={slide.image}
                alt="Slide Image"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col justify-between min-h-[250px]">
                <p className="text-sm mb-4">{slide.description}</p>
                <p className="font-bold mt-auto">{slide.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Coaching Programs Section */}
      <div className="bg-black mt-16 py-12 px-8 rounded-lg shadow-lg">
        <h3 className="text-4xl font-bold text-center text-white">Part of Coaching Programs</h3>
        <p className="text-lg mt-4 text-center max-w-2xl mx-auto text-gray-200">
          Transform your body and mindset with our personalized coaching programs. Whether you're looking to improve strength, endurance, or overall fitness, our experts will guide you through every step of your journey.
        </p>

        {/* Coaching Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white text-black p-6 rounded-lg">
            <h4 className="text-2xl font-bold">Strength Training</h4>
            <p className="text-sm mt-2">
              Build muscle and improve your strength with customized training programs designed for all levels.
            </p>
            <a href="/coaching" className="mt-4 inline-block bg-[#410505] text-white py-2 px-4 rounded-full">
              Learn more
            </a>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h4 className="text-2xl font-bold">Cardio & Endurance</h4>
            <p className="text-sm mt-2">
              Boost your cardiovascular fitness with programs tailored to improve endurance and overall health.
            </p>
            <a href="/coaching" className="mt-4 inline-block bg-[#410505] text-white py-2 px-4 rounded-full">
              Learn more
            </a>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h4 className="text-2xl font-bold">Nutrition Coaching</h4>
            <p className="text-sm mt-2">
              Fuel your body right with our expert-designed nutrition plans that complement your training and goals.
            </p>
            <a href="/coaching" className="mt-4 inline-block bg-[#410505] text-white py-2 px-4 rounded-full">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
  