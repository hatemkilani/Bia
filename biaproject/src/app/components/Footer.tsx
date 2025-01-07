"use client"; // Ensure client-side rendering for the component

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Icons

const Footer = () => {
  return (
    <footer className="bg-[#320707] text-white py-8">
      {/* Links */}
      <div className="flex justify-center space-x-16 mb-6">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-8 mb-6">
        <a href="#" className="text-white bg-white rounded-full p-4" aria-label="Facebook">
          <FaFacebookF className="text-[#320707]" />
        </a>
        <a href="#" className="text-white bg-white rounded-full p-4" aria-label="Twitter">
          <FaTwitter className="text-[#320707]" />
        </a>
        <a href="#" className="text-white bg-white rounded-full p-4" aria-label="Instagram">
          <FaInstagram className="text-[#320707]" />
        </a>
        <a href="#" className="text-white bg-white rounded-full p-4" aria-label="Tiktok">
          <FaTiktok className="text-[#320707]" />
        </a>
        <a href="#" className="text-white bg-white rounded-full p-4" aria-label="Youtube">
          <FaYoutube className="text-[#320707]" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>© Copyright 2030 Kilani Hatem - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
