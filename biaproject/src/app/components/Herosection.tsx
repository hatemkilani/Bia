"use client"; // Ensure client-side rendering for the component

import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null); 
  const [lastScrollTop, setLastScrollTop] = useState(0); // To track scroll direction
  const [isScrollingUp, setIsScrollingUp] = useState(false); // Track if the user is scrolling up

  useEffect(() => {
    let rafId: number; // RequestAnimationFrame ID for smooth updates

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if we are scrolling up
      if (scrollPosition < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      // Update last scroll position
      setLastScrollTop(scrollPosition);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Video playback control for smooth rewinding
    const smoothRewind = () => {
      if (videoRef.current && isScrollingUp) {
        // Smoothly decrease the current time to create the rewind effect
        if (videoRef.current.currentTime > 0) {
          videoRef.current.currentTime -= 0.1; // Adjust this value for a smoother or faster rewind
        }
      }
      rafId = requestAnimationFrame(smoothRewind);
    };

    // Start smooth rewind process
    rafId = requestAnimationFrame(smoothRewind);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(rafId); // Clean up the animation frame
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingUp, lastScrollTop]); // Depend on scroll direction and scroll position

  return (
    <div style={styles.heroSection}>
      <video
        ref={videoRef} // Reference to control the video
        muted
        loop
        autoPlay
        playsInline
        style={styles.videoBackground}
      >
        <source src="/istockphoto-1255728419-640_adpp_is-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Bia.
        </h1>
        <p style={styles.text}>
          Welcome to Bia, where the essence of the sigma mentality <br />
          meets the divine power of the Greek gods. Our collection is <br />
          crafted for those who walk their own path, embracing <br />
          strength, independence, and the relentless pursuit of greatness. <br />
          Dress like a god, live like a legend.
        </p>
        <a href="#new-products" className="button-animation">
          New products
        </a>
      </div>

      {/* Correct placement of style jsx */}
      <style jsx>{`
        .button-animation {
          background-color: #5b0c0c;
          color: #fff;
          padding: 12px 40px;
          border-radius: 30px;
          font-size: 18px;
          font-weight: bold;
          text-decoration: none;
          min-width: 180px;
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .button-animation:hover {
          transform: scale(1.1);
        }

        .button-animation:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '50px',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'left',
    color: '#fff',
    maxWidth: '600px',
    marginTop: '150px',
  },
  title: {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '30px',
  },
};

export default HeroSection;
