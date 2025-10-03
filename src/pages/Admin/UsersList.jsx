import React, { useEffect, useState } from "react";
import Loader from "../Public/Loader";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function FetchData() {
      try {
        const res = await api.get("/admin/users");
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
        setError("failed to fetch products");
      } finally {
        setLoading(false);
        console.log(loading);
      }
    }

    FetchData();
  }, []);

  async function disableUser(id) {
    try {
      await api.post(`admin/users/${id}/disable`);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isEnabled: false } : u))
      );
      alert("Disabled successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function enableUser(id) {
    try {
      await api.post(`admin/users/${id}/enable`);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isEnabled: true } : u))
      );
      alert("Enabled successfully");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <Loader></Loader>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <>
      <Navbar role="admin"></Navbar>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin - View Users</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Enabled? </th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="text-center">
                    <td className="border px-4 py-2">{user.username}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.role}</td>
                    <td className="border px-4 py-2">
                      {user.isEnabled ? (
                        <span className="text-green-600 font-semibold">
                          Enabled
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Disabled
                        </span>
                      )}
                    </td>
                    <td className="border px-4 py-2 space-x-2">
                      {user.isEnabled ? (
                        <button
                          onClick={() => disableUser(user._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Disable
                        </button>
                      ) : (
                        <button
                          onClick={() => enableUser(user._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
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
                    className="px-4 py-4 text-center text-gray-500"
                    colSpan="6"
                  >
                    No Users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default UsersList;
