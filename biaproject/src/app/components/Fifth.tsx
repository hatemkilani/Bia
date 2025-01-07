"use client"; // This will ensure the component can handle client-side logic

const Fifth = () => {
  return (
    <section className="bg-gradient-to-b from-[#410505] to-black text-white py-12 px-8 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl mb-8">
        {/* Video element without controls */}
        <video
          className="w-full h-auto rounded-lg"
          autoPlay
          loop
          muted
        >
          <source src="/Free Vj Loop 28.mp4" type="video/mp4" /> {/* Correct path to your video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Prestigious Phrase */}
      <h2 className="text-3xl font-bold text-center">
        Step into the realm of gods, where greatness is born.
      </h2>
    </section>
  );
};

export default Fifth;
