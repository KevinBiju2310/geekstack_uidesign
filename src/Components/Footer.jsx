import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  DollarSign,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* First Column - Logo, Social Icons, Description */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="bg-white text-black px-2 py-1 rounded mr-3">
                <span className="font-bold text-lg">GO</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  TOURISTS TRAVEL
                </div>
                <div className="text-white text-sm">BUREAU UK LTD</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <Youtube size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <MessageCircle size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                <DollarSign size={18} />
              </div>
            </div>

            {/* Paragraph Text */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Discover the world's most captivating places, from hidden gems to
              popular hotspots. Explore our curated selection of destinations
              that inspire adventure and wanderlust. Start planning your next
              journey today!
            </p>

            {/* Explore Destinations Button */}
            <div className="mt-20 mb-4">
              <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
                Explore Destinations
              </button>
            </div>
          </div>

          {/* Second Column - Navigation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discover Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Discover
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Stay
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Travel Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Travel</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Hotels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Villas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Explore UK
                  </a>
                </li>
              </ul>
            </div>

            {/* Languages Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Languages
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Arabic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    French
                  </a>
                </li>
              </ul>
            </div>
            {/* Newsletter Section */}
            <div className="mt-20">
              <div className="flex flex-col md:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your e-mail Address"
                  className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright Tourists Travel Bureau UK LTD. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
