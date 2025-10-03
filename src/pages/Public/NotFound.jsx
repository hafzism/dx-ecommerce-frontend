import { Link } from "react-router-dom";

export default function NotFound({auth}) {

     let homePath = "/login"; // default for public
  if (auth?.role === "user") homePath = "/home";
  if (auth?.role === "admin") homePath = "/admin";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! Page not found.</p>
      <Link
        to={homePath}
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}