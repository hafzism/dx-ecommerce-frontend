import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    setError("")
    try {
      const res = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });
      console.log(res.data.message);
      navigate("/login", { replace: true });
    } catch (err) {
      if(err.response){
        setError(err.response.data.error || "Login failed")
        console.log(err.response);
      }else{
        setError("some error happened")
      }

    }

  }

  function goToLogin(){
    navigate('/login')
  }

  return (
    <>
      {error && <p>{error}</p>}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Username </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email </label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password </label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Confirm Password{""}
              </label>
              <input
                type="password"
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
              <span className="hover:underline cursor-pointer" onClick={goToLogin}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
