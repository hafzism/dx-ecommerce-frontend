import React, { useEffect, useState } from "react";
import Loader from "../Public/Loader";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import { UserCheck, UserX, Mail, Shield } from "lucide-react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 6;

  useEffect(() => {
    async function FetchData() {
      try {
        const res = await api.get("/admin/users");
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }
    FetchData();
  }, []);

  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  async function disableUser(id) {
    try {
      await api.post(`admin/users/${id}/disable`);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isEnabled: false } : u))
      );
      alert("User disabled successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to disable user");
    }
  }

  async function enableUser(id) {
    try {
      await api.post(`admin/users/${id}/enable`);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isEnabled: true } : u))
      );
      alert("User enabled successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to enable user");
    }
  }

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
              User Management
            </h1>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              View and manage all registered users
            </p>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Users Table */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-[#D4A574] dark:bg-[#C89F6F]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Username
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      Role
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4A574]/20 dark:divide-[#C89F6F]/20">
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#D4A574] dark:bg-[#C89F6F] flex items-center justify-center text-white font-semibold">
                              {user.username.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-[#2D2D2D] dark:text-[#E5E5E5]">
                              {user.username}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A0A0A0]">
                            <Mail size={16} />
                            <span className="text-sm">{user.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Shield size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
                            <span className="text-sm font-medium text-[#2D2D2D] dark:text-[#E5E5E5] capitalize">
                              {user.role}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {user.isEnabled ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                              <UserCheck size={14} />
                              Enabled
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium">
                              <UserX size={14} />
                              Disabled
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {user.isEnabled ? (
                            <button
                              onClick={() => disableUser(user._id)}
                              className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 dark:hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
                            >
                              Disable
                            </button>
                          ) : (
                            <button
                              onClick={() => enableUser(user._id)}
                              className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                            >
                              Enable
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="px-6 py-12 text-center text-[#6B6B6B] dark:text-[#A0A0A0]"
                        colSpan="5"
                      >
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20 p-4">
              <Pagination
                userPerPage={userPerPage}
                totalUsers={users.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsersList;