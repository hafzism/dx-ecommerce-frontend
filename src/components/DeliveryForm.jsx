import React from "react";

const DeliveryForm = ({ form, handleChange }) => {
  return (
    <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div className="text-xl sm:text-2xl my-3">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            DELIVERY <span className="text-gray-700 font-medium">INFORMATION</span>
          </p>
          <p className="w-8 sm:w-12 h-px sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      <div className="flex gap-3">
        <input required name="firstName" value={form.firstName} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
        <input required name="lastName" value={form.lastName} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
      </div>

      <input required name="email" value={form.email} onChange={handleChange}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
      <input required name="street" value={form.street} onChange={handleChange}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />

      <div className="flex gap-3">
        <input required name="city" value={form.city} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
        <input name="state" value={form.state} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
      </div>

      <div className="flex gap-3">
        <input required name="zipcode" value={form.zipcode} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zipcode" />
        <input required name="country" value={form.country} onChange={handleChange}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
      </div>

      <input required name="phone" value={form.phone} onChange={handleChange}
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Phone" />
    </div>
  );
};

export default DeliveryForm;
