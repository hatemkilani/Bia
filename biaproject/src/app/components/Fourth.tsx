"use client"; // This will ensure the component can handle client-side logic

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
    </section>
  );
};

export default Fourth;
