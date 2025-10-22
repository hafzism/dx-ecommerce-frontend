import { useState } from "react";
import { User, Lock } from "lucide-react";

const LoginForm = ({ title, onSubmit, error, extraLinks }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (/\s/.test(trimmedUsername)) {
      alert("Username cannot contain spaces.");
      return;
    }

    if (trimmedPassword.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    onSubmit(trimmedUsername, trimmedPassword);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="bg-[#FFFFFF] dark:bg-[#242424] p-8 rounded-2xl shadow-lg w-full max-w-sm border border-[#D4A574]/30 dark:border-[#C89F6F]/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#8B4513] dark:text-[#C89F6F]">
          {title}
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
              <User className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]" size={18} />
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
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-[#8B4513] dark:text-[#C89F6F]" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#D4A574]/40 dark:border-[#C89F6F]/30 bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]/50"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2C5F2D] dark:bg-[#4A7C4E] text-white font-semibold py-2.5 rounded-lg hover:bg-[#8B4513] dark:hover:bg-[#A0653F] transition-all duration-300 shadow-md"
          >
            Submit
          </button>

          {extraLinks && (
            <div className="mt-4 text-center text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
              {extraLinks}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
