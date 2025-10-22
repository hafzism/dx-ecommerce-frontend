import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarAdmin";
import api from "../../services/axios";
import PaymentMethod from "../../components/PaymentMethod";
import CartSummary from "../../components/CartSummary";
import DeliveryForm from "../../components/DeliveryForm";
import { ShoppingBag, BookOpen } from "lucide-react";

const CheckOut = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loadingCart, setLoadingCart] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoadingCart(true);
        const res = await api.get("/cart");
        const items = res.data.result || [];
        setCartItems(items);
        const s = items.reduce(
          (acc, item) => acc + (item.product_id?.price || 0) * item.quantity,
          0
        );
        setSubtotal(s);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setLoadingCart(false);
      }
    };
    fetchCart();
  }, []);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const buildAddress = () => ({
    line1: form.street,
    line2: `${form.firstName} ${form.lastName}`.trim(),
    city: form.city,
    state: form.state,
    postal_code: form.zipcode,
    country: form.country,
    phone: form.phone,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const required = ["street", "city", "state", "zipcode", "country"];
    for (let k of required) {
      if (!form[k]) {
        alert("Please fill all required address fields.");
        return;
      }
    }
    setSubmitting(true);
    try {
      const address = buildAddress();
      const res = await api.post("/orders", { address });
      const order = res.data.orderdata;
      navigate("/order-success", { state: { order } });
    } catch (err) {
      console.error("Place order failed:", err);
      alert(err?.response?.data?.error || "Could not place order. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const shippingFee = 10;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-8 h-8 text-[#D4A574] dark:text-[#C89F6F]" />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
              Checkout
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-20 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              Complete your order
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Delivery Form */}
          <div className="lg:col-span-2 bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6 sm:p-8">
            <DeliveryForm form={form} handleChange={handleChange} />
          </div>

          {/* Right Column - Summary & Payment */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6">
              <CartSummary
                subtotal={subtotal}
                shippingFee={shippingFee}
                loadingCart={loadingCart}
              />
            </div>
            
            <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6">
              <PaymentMethod submitting={submitting} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;