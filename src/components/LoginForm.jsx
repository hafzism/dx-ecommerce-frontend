import { useState } from "react";

const LoginForm = ({ title, onSubmit, error, extraLinks }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(email, password);
  }
  
  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setPassword(e.target.value)}
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