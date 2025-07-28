import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-6">
      {/* Logo */}
      <img src="/V2.png" alt="Logo" className="w-24 h-24 mb-6 animate-pulse" />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        🚧 We're Under Maintenance
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl">
        Our website is currently undergoing some scheduled upgrades to improve
        your experience. <br />
        We'll be back online shortly. Thank you for your patience.
      </p>

      {/* Contact Info */}
      <div className="text-center text-sm md:text-base mb-6 space-y-1">
        <p>
          📞{" "}
          <a href="tel:+919903653504" className="text-blue-400 hover:underline">
            +91 9903653504{" "}
          </a>
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:shahi8610@gmail.com"
            className="text-blue-400 hover:underline"
          >
            shahi8610@gmail.com
          </a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-6 text-2xl mt-4">
        <a
          href="https://wa.me/919903653504"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/vergevantage/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/VergeVantage"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} vergevantage.com. @All rights reserved.
      </p>
    </div>
  );
};

export default Maintenance;
