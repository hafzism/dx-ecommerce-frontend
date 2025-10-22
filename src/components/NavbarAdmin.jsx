import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../services/logout";
import { useAuth } from "../context/AuthContext";
import { 
  Home, 
  ShoppingBag, 
  ShoppingCart, 
  Package, 
  LogIn, 
  UserPlus, 
  Users, 
  Layers,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";

const navLinks = {
  admin: [
    { name: "Home", path: "/admin", icon: Home },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Categories", path: "/admin/categories", icon: Layers },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Orders", path: "/admin/orders", icon: ShoppingBag },
  ],
  user: [
    { name: "Home", path: "/", icon: Home },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
    { name: "Orders", path: "/orders", icon: Package },
  ],
  public: [
    { name: "Home", path: "/", icon: Home },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Login", path: "/login", icon: LogIn },
    { name: "Register", path: "/register", icon: UserPlus },
  ],
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, refreshAuth } = useAuth();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derive role and username from auth context
  const role = auth?.role || "public";
  const username = auth?.username || "Guest";

  useEffect(() => {
    const savedTheme = localStorage.getItem("litbay-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  async function handleLogout() {
    try {
      await logout();
      await refreshAuth(); // Update auth context
      alert("Logout successful");
      navigate("/login", { replace: true });
    } catch {
      alert("Logout failed. Try again.");
    }
  }

  function toggleTheme() {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("litbay-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("litbay-theme", "light");
    }
  }

  const links = navLinks[role] || navLinks.public;

  return (
    <nav className="sticky top-0 bg-[#FAF8F5] dark:bg-[#1A1A1A] shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center leading-none">
            <span className="swankyfont text-2xl sm:text-3xl text-[#2D2D2D] dark:text-[#E5E5E5] transition-colors">
              LB
            </span>
            <span className="text-[9px] sm:text-[12px] font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] tracking-wider uppercase">
              Litbay
            </span>
          </div>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(link.path + "/");
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    isActive
                      ? "text-[#D4A574] dark:text-[#C89F6F]"
                      : "text-[#2D2D2D] dark:text-[#E5E5E5] hover:text-[#D4A574] dark:hover:text-[#C89F6F]"
                  }`}
                  title={link.name}
                >
                  <Icon size={22} />
                  <span className="text-xs font-medium">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: User info + Theme toggle + Mobile menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:block text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5]">
            {username}
          </span>

          {(role === "admin" || role === "user") && (
            <button
              onClick={handleLogout}
              className="hidden sm:block bg-[#8B4513] dark:bg-[#A0653F] text-white px-4 py-2 rounded-lg hover:bg-[#6D3410] dark:hover:bg-[#8B4513] transition-all text-sm font-medium"
            >
              Logout
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#D4A574] dark:bg-[#C89F6F] text-white hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#D4A574] dark:bg-[#C89F6F] text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#D4A574] dark:border-[#C89F6F] bg-[#FFFFFF] dark:bg-[#242424]">
          <ul className="flex flex-col px-4 py-3 gap-2">
            <li className="px-3 py-2 text-sm font-medium text-[#8B4513] dark:text-[#C89F6F]">
              {username}
            </li>
            {links.map((link) => {
              const isActive =
                location.pathname === link.path ||
                location.pathname.startsWith(link.path + "/");
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#D4A574] dark:bg-[#C89F6F] text-white"
                        : "text-[#2D2D2D] dark:text-[#E5E5E5] hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A]"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              );
            })}
            {(role === "admin" || role === "user") && (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg bg-[#8B4513] dark:bg-[#A0653F] text-white hover:bg-[#6D3410] dark:hover:bg-[#8B4513] transition-all font-medium"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}