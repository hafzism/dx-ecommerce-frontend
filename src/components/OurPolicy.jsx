import React from 'react';
import head from '../assets/head.png';
import head1 from '../assets/exchange.png';
import head2 from '../assets/return.png';

const OurPolicy = () => {
  return (
    <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] py-16 sm:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Optional: Add a heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-3">
            Why Choose Litbay?
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A0A0A0]">
            Your satisfaction is our priority
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-start gap-12 sm:gap-8 text-center">
          
          {/* Easy Exchange */}
          <div className="group flex flex-col items-center flex-1">
            <div className="w-20 h-20 mb-5 rounded-full bg-linear-to-br from-[#D4A574] to-[#C89F6F] dark:from-[#C89F6F] dark:to-[#A0653F] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              <img 
                src={head} 
                className="w-12 h-12 object-contain filter brightness-0 invert" 
                alt="Easy Exchange"
              />
            </div>
            <h3 className="font-bold text-lg text-[#8B4513] dark:text-[#C89F6F] mb-2">
              Easy Exchange Policy
            </h3>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] max-w-[250px]">
              We offer hassle free exchange policy
            </p>
          </div>

          {/* 7 Days Return */}
          <div className="group flex flex-col items-center flex-1">
            <div className="w-20 h-20 mb-5 rounded-full bg-linear-to-br from-[#D4A574] to-[#C89F6F] dark:from-[#C89F6F] dark:to-[#A0653F] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              <img 
                src={head1} 
                className="w-12 h-12 object-contain filter brightness-0 invert" 
                alt="7 Days Return"
              />
            </div>
            <h3 className="font-bold text-lg text-[#8B4513] dark:text-[#C89F6F] mb-2">
              7 Days Return Policy
            </h3>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] max-w-[250px]">
              We provide 7 days free return policy
            </p>
          </div>

          {/* Customer Support */}
          <div className="group flex flex-col items-center flex-1">
            <div className="w-20 h-20 mb-5 rounded-full bg-linear-to-br from-[#D4A574] to-[#C89F6F] dark:from-[#C89F6F] dark:to-[#A0653F] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              <img 
                src={head2} 
                className="w-12 h-12 object-contain filter brightness-0 invert" 
                alt="Customer Support"
              />
            </div>
            <h3 className="font-bold text-lg text-[#8B4513] dark:text-[#C89F6F] mb-2">
              Best Customer Support
            </h3>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] max-w-[250px]">
              We provide 24/7 customer support
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurPolicy;