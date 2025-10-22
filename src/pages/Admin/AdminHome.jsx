import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import api from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { Users, Package, ShoppingBag, Layers, TrendingUp, ArrowRight } from 'lucide-react';

const AdminHome = () => {
  const [counts, setCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get('admin/loadhome');
        setCounts(res.data);
      } catch (error) {
        console.error('Failed to load dashboard data');
      }
    }
    fetchData();
  }, []);

  const dashboardCards = [
    {
      title: 'Users',
      count: counts.userCount || 0,
      icon: Users,
      color: 'from-[#D4A574] to-[#C89F6F]',
      path: '/admin/users',
    },
    {
      title: 'Products',
      count: counts.productCount || 0,
      icon: Package,
      color: 'from-[#2C5F2D] to-[#4A7C4E]',
      path: '/admin/products',
    },
    {
      title: 'Orders',
      count: counts.orderCount || 0,
      icon: ShoppingBag,
      color: 'from-[#8B4513] to-[#A0653F]',
      path: '/admin/orders',
    },
    {
      title: 'Categories',
      count: counts.categoryCount || 0,
      icon: Layers,
      color: 'from-[#D4A574] to-[#8B4513]',
      path: '/admin/categories',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp size={40} className="text-[#D4A574] dark:text-[#C89F6F]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-lg text-[#6B6B6B] dark:text-[#A0A0A0]">
              Manage your Litbay store efficiently
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  onClick={() => navigate(card.path)}
                  className="group relative overflow-hidden bg-[#FFFFFF] dark:bg-[#242424] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-transparent hover:border-[#D4A574] dark:hover:border-[#C89F6F]"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-linear-to-br ${card.color}`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      <ArrowRight size={24} className="text-[#D4A574] dark:text-[#C89F6F] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
                      {card.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => navigate('/admin/products/create')}
                className="flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-md hover:shadow-lg"
              >
                <Package size={20} />
                Add Product
              </button>
              
              <button
                onClick={() => navigate('/admin/category/create')}
                className="flex items-center justify-center gap-2 bg-[#8B4513] dark:bg-[#A0653F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6D3410] dark:hover:bg-[#8B4513] transition-all shadow-md hover:shadow-lg"
              >
                <Layers size={20} />
                Add Category
              </button>
              
              <button
                onClick={() => navigate('/admin/orders')}
                className="flex items-center justify-center gap-2 bg-[#2C5F2D] dark:bg-[#4A7C4E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#235023] dark:hover:bg-[#2C5F2D] transition-all shadow-md hover:shadow-lg"
              >
                <ShoppingBag size={20} />
                View Orders
              </button>
              
              <button
                onClick={() => navigate('/admin/users')}
                className="flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-md hover:shadow-lg"
              >
                <Users size={20} />
                Manage Users
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;