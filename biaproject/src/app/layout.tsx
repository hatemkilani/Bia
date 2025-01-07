"use client"; // Make sure this component is treated as a client-side component

import './globals.css';
import { ReactNode, useState, useEffect } from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext'; 
import { usePathname, useSearchParams } from 'next/navigation'; // For tracking route changes in app directory
import Spinner from './components/Spinner';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(false); // State to control loading spinner
  const pathname = usePathname(); // Track the current route
  const searchParams = useSearchParams(); // Track search params if any

  useEffect(() => {
    // Trigger loading state whenever the path or search params change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after a delay (for smooth transition)
    }, 500); // Adjust delay time as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <head>
        {/* Add any metadata, styles, or links here */}
      </head>
      <body>
        {/* Display Spinner during loading */}
        {loading && <Spinner />}
        
        <CartProvider>
          <Header />
          {/* Render page-specific content */}
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
