
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
         
          <div  className="text-xl font-bold flex items-center gap-2 text-purple-600">
            <img 
              src="/images/logo.png" 
              alt="HERO.IO Logo" 
              className="w-8 h-8 rounded-full object-cover" 
            />
            HERO.IO
          </div>

   
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
               <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

         
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 - All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}