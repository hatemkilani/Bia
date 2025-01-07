"use client"; // Ensure client-side rendering for the component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from Next.js 13 for route path

const Header = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <header className="bg-black text-white py-6 px-12 flex justify-between items-center">
      {/* Logo Section - Link to Homepage */}
      <Link href="/" legacyBehavior>
        <a className="text-4xl font-bold">
          <img src="/logo.png" alt="Bia Logo" className="w-32" />
        </a>
      </Link>

      {/* Navigation Links - Centered */}
      <nav className="flex-grow flex justify-center space-x-12">
        <Link href="/about" legacyBehavior>
          <a className="text-xl hover:text-gray-400">About</a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a className="text-xl hover:text-gray-400">Services</a>
        </Link>
        <Link href="/contacts" legacyBehavior>
          <a className="text-xl hover:text-gray-400">Contacts</a>
        </Link>
      </nav>

      {/* Conditionally render "Shop Now" button only if the current path is NOT "/shop" */}
      {pathname !== "/shop" && (
        <Link href="/shop" legacyBehavior>
          <a className="bg-[#5b0c0c] text-white py-3 px-8 text-xl rounded-full hover:bg-opacity-90 transition">
            Shop Now
          </a>
        </Link>
      )}
    </header>
  );
};

export default Header;
