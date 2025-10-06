import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../services/logout";
import { checkAuth } from "../services/checkAuth";

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
    { name: "Shop", path: "/shop" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ],
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("public");

  useEffect(() => {
    async function getAuth() {
      try {
        const res = await checkAuth();
        if (res.isAuthenticated) {
          setRole(res.role);
        } else {
          setRole("public");
        }
      } catch (err) {
        setRole("public");
      }
    }
    getAuth();
  }, []);

  async function handleLogout() {
    try {
      await logout();
      alert("logout success")
      navigate("/login", { replace: true });
      setRole("public");
    } catch {
      alert("Logout failed. Try again.");
    }
  }

  const links = navLinks[role] || navLinks.public;

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">ECOM.DEV</h1>

        <ul className="flex gap-6 items-center">
          {links.map((link) => {
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(link.path + "/");

            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600"
                  } transition-all`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

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
