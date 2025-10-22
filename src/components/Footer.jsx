import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#242424] border-t border-[#D4A574] dark:border-[#C89F6F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
<div className="flex flex-col items-center justify-center leading-none">
  <span className="swankyfont text-4xl text-[#2D2D2D] dark:text-[#E5E5E5] transition-colors">
    LB
  </span>
  <span className="text-[14px] font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] tracking-wider uppercase">
    Litbay
  </span>
</div>


              <h3 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
                Litbay
              </h3>
            </div>
            <p className="text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
              Your trusted destination for quality books. Discover, read, and grow with Litbay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Shop', 'About Us', 'Contact', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <span className="cursor-default text-sm text-[#2D2D2D] dark:text-[#E5E5E5] hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-4">
              Policies
            </h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms & Conditions', 'Return Policy', 'Shipping Info'].map((item, i) => (
                <li key={i}>
                  <span className="cursor-default text-sm text-[#2D2D2D] dark:text-[#E5E5E5] hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
                <Phone size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
                <Mail size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
                <span>hello@litbay.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
                <MapPin size={16} className="text-[#D4A574] dark:text-[#C89F6F] mt-1" />
                <span>123 Book Street, Library City, LC 12345</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <span
                  key={i}
                  className="cursor-default p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#8B4513] dark:text-[#C89F6F] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F] transition-all"
                >
                  <Icon size={18} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#D4A574] dark:border-[#C89F6F] text-center space-y-2">
          <p className="text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
            © {new Date().getFullYear()} Litbay. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6B6B] dark:text-[#BDBDBD]">
            Developed by <span className="font-medium text-[#8B4513] dark:text-[#C89F6F]">Mohammed Hafeez</span> - 
            <a 
              href="https://hafzism.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-[#D4A574] dark:hover:text-[#C89F6F] ml-1"
            >
              hafzism.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
