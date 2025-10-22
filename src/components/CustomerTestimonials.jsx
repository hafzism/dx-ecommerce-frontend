import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Muhammed Rashid",
    job: "Digital Marketer",
    image: "https://i.ibb.co/20BqKMfT/photo-2025-10-22-17-29-27.jpg",
    review: "Litbay has transformed my reading experience! The collection is vast, and I always find exactly what I'm looking for. The delivery is prompt, and the customer service is outstanding.",
    rating: 5,
  },
  {
    name: "Sahil Krishna",
    job: "Fashion designer",
    image: "https://i.ibb.co/5hh9wH4C/photo-2025-10-22-17-29-26.jpg",
    review: "I've been a loyal customer for over a year now. The quality of books is excellent, and the prices are very reasonable. Litbay is my go-to place for all things books!",
    rating: 5,
  },
  {
    name: "Javad E",
    job: "Software Engineer",
    image: "https://i.ibb.co/GvWgPmZb/photo-2025-10-22-17-29-24.jpg",
    review: "As someone who loves tech books, Litbay's selection is unbeatable. The website is easy to navigate, and I appreciate the detailed descriptions. Highly recommend for book lovers!",
    rating: 5,
  },
];

const CustomerTestimonials = () => {
  return (
    <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-3">
            What Our Readers Say
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A0A0A0]">
            Discover why thousands of book lovers trust Litbay
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#242424] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#D4A574] dark:hover:border-[#C89F6F]"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote size={32} className="text-[#D4A574] dark:text-[#C89F6F] opacity-50" />
                
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#D4A574] text-[#D4A574] dark:fill-[#C89F6F] dark:text-[#C89F6F]"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[#2D2D2D] dark:text-[#E5E5E5] text-sm sm:text-base leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#D4A574] dark:border-[#C89F6F]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#D4A574] dark:ring-[#C89F6F] group-hover:ring-4 transition-all"
                />
                <div>
                  <h4 className="font-semibold text-[#8B4513] dark:text-[#C89F6F] text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                    {testimonial.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm">
            Join thousands of satisfied readers today
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;