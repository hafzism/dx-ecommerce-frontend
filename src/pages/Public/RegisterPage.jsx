import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

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

    if (
      !trimmedUsername ||
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedConfirm
    ) {
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
      const res = await axios.post("http://localhost:3000/register", {
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
      {error && (
        <p className="text-center text-red-600 font-semibold mt-4">{error}</p>
      )}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <br />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <br />
            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <span
                className="hover:underline cursor-pointer"
                onClick={goToLogin}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
