import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/logout";

const navLinks = {
  admin: [
    { name: "Home", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Users", path: "/admin/users" },
    { name: "Orders", path: "/admin/orders" },
  ], 
  user: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    { name: "Orders", path: "/orders" },
  ],
  public: [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ],
};

export default function Navbar({ role = "public" }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      alert("Logout failed. Try again.");
    }
  }

  const links = navLinks[role] || navLinks.public;
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1
          className="text-2xl font-bold"
        >
          ECOM.DEV
        </h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-gray-600">
                {link.name}
              </Link>
            </li>
          ))}

          {(role === "admin" || role === "user") && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
