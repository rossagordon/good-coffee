import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div name="contact" className="bg-[#284B63] text-white">
      <div className="px-12">
        <h2 className="text-5xl text-center py-8">Connect</h2>
        <ul className="flex justify-center py-8">
          <li className="p-4">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
          </li>
          <li className="p-4">
            <a href="https://twitter.com" target="_blank">
              <FaTwitterSquare size={30} />
            </a>
          </li>
          <li className="p-4">
            <a href="https://instagram.com" target="_blank">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center px-8 pb-8">
        <h4>
          <a href="tel:804-456-1234">(804)-456-1234</a>
        </h4>
        <h4>
          <a href="mailto:info@coffeeshop.com">info@coffeeshop.com</a>
        </h4>
        <h4>123 Main St. Richmond, VA 23220</h4>
      </div>
    </div>
  );
};

export default Footer;
