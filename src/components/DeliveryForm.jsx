import React from "react";
import { MapPin, User, Mail, Phone } from "lucide-react";

const DeliveryForm = ({ form, handleChange }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="w-6 h-6 text-[#D4A574] dark:text-[#C89F6F]" />
          <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
            Delivery Information
          </h2>
        </div>
        <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
      </div>

      {/* Personal Info Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[#8B4513] dark:text-[#A0653F] uppercase tracking-wide flex items-center gap-2">
          <User size={16} />
          Personal Details
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="John"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2 flex items-center gap-2">
            <Mail size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
            type="email"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2 flex items-center gap-2">
            <Phone size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
            type="text"
            placeholder="+91 1234567890"
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="space-y-4 pt-6 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
        <h3 className="text-sm font-semibold text-[#8B4513] dark:text-[#A0653F] uppercase tracking-wide flex items-center gap-2">
          <MapPin size={16} />
          Shipping Address
        </h3>

        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="street"
            value={form.street}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
            type="text"
            placeholder="123 Main Street, Apt 4B"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="Mumbai"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              State
            </label>
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="Maharashtra"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              Zipcode <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="400001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:border-[#D4A574] dark:focus:border-[#C89F6F] focus:outline-none transition-colors"
              type="text"
              placeholder="India"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;