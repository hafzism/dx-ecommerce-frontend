import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="bg-gray-200 text-gray-800 mt-10 py-8 px-6 rounded-3xl shadow-md ">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Logo + About */}
    <div>
      <h1 className="text-2xl font-bold">SHOP.CO</h1>
      <p className="mt-2 max-w-xs text-gray-700">
        We have clothes that suit your style and make you proud to wear them.
      </p>
    </div>
    {/* Social Icons */}
    <div className="flex gap-5 text-gray-600">
      <FaXTwitter size={25} />
      <FaFacebook size={25} />
      <FaInstagram size={25} />
      <FaGithub size={25} />
    </div>
  </div>

  {/* Bottom section */}
  <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500">
    © 2024 SHOP.CO — All Rights Reserved
  </div>
</footer>

  );
}
