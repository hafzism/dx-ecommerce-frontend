import { useState } from "react";

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
    <>
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
              />
            </div>

            <br />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>

            {extraLinks && <div className="mt-4">{extraLinks}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
