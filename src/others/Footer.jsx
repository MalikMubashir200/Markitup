import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping, MdPayment, MdSupportAgent } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#fff43e] text-black pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex items-center">
            <MdLocalShipping className="text-3xl text-blue-400 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Free Shipping</h3>
              <p className="text-gray-400">On orders over $50</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div>
              <h3 className="font-bold text-lg">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MdPayment className="text-3xl text-blue-400 mr-4" />
            <div>
              <h3 className="font-bold text-lg">Secure Payment</h3>
              <p className="text-gray-400">100% secure checkout</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MdSupportAgent className="text-3xl text-blue-400 mr-4" />
            <div>
              <h3 className="font-bold text-lg">24/7 Support</h3>
              <p className="text-gray-400">Dedicated support</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-black mb-4">
              We provide the best products at the most competitive prices with excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className=" hover:text-white transition">Home</a></li>
              <li><a href="#" className=" hover:text-white transition">Shop</a></li>
              <li><a href="#" className=" hover:text-white transition">About</a></li>
              <li><a href="#" className=" hover:text-white transition">Contact</a></li>
              <li><a href="#" className=" hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className=" hover:text-white transition">My Account</a></li>
              <li><a href="#" className=" hover:text-white transition">Order Tracking</a></li>
              <li><a href="#" className=" hover:text-white transition">Wishlist</a></li>
              <li><a href="#" className=" hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className=" hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EcomRance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-black hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-black hover:text-white text-sm transition">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;