import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { User, Mail, Lock } from "lucide-react";
import api from "../../services/axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirm = confirmPassword.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedPassword || !trimmedConfirm) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (/\s{2,}/.test(trimmedUsername)) {
      alert("❌ Username cannot contain multiple spaces.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    if (trimmedPassword.length < 6) {
      alert("🔒 Password must be at least 6 characters long.");
      return;
    }

    if (trimmedPassword !== trimmedConfirm) {
      alert("❌ Passwords do not match.");
      return;
    }

    try {
      await api.post("/register", {
        username: trimmedUsername,
        email: trimmedEmail,
        password: trimmedPassword,
      });

      alert("✅ Registration successful! Redirecting to login...");
      navigate("/login", { replace: true });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Registration failed");
        alert(err.response.data.error || "Registration failed.");
      } else {
        setError("Some error occurred.");
        alert("⚠️ Network or server error. Please try again.");
      }
    }
  }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A] transition-colors duration-300">
        <div className="bg-[#FFFFFF] dark:bg-[#242424] p-8 rounded-2xl shadow-lg w-full max-w-sm border border-[#D4A574]/30 dark:border-[#C89F6F]/20">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#8B4513] dark:text-[#C89F6F]">
            User Registration
          </h2>

          {error && (
            <p className="text-red-500 text-center mb-4 text-sm font-medium">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Username
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]"
                  size={18}
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-[#D4A574]/40 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]/50"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#D4A574]/40 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]/50"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]"
                  size={18}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#D4A574]/40 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]/50"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]"
                  size={18}
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-[#D4A574]/40 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]/50"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C5F2D] dark:bg-[#4A7C4E] text-white font-semibold py-2.5 rounded-lg hover:bg-[#8B4513] dark:hover:bg-[#A0653F] transition-all duration-300 shadow-md"
            >
              Register
            </button>

            <p className="mt-4 text-sm text-center text-[#2D2D2D] dark:text-[#E5E5E5]">
              Already have an account?{" "}
              <span
                onClick={goToLogin}
                className="text-[#8B4513] dark:text-[#C89F6F] font-semibold hover:underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
