import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categoryImages = {
  'fiction': 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=300&fit=crop',
  'mystery': 'https://images.unsplash.com/photo-1598615821969-e4b1c7fcf24d?w=400&h=300&fit=crop',
  'romance': 'https://images.unsplash.com/photo-1521033719794-41049d18b8d4?w=400&h=300&fit=crop',
  'science fiction': 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=300&fit=crop',
  'children': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
  'detective-fiction': 'https://images.unsplash.com/photo-1633266841047-719b5f737149?w=400&h=300&fit=crop',
  'biography': 'https://images.unsplash.com/photo-1569769107543-e0f61bab8e02?w=400&h=300&fit=crop',
  'history': 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=300&fit=crop',
  'self-help': 'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=400&h=300&fit=crop',
  'poetry': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
  'default': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
};

const getCategoryImage = (categoryName) => {
  const name = categoryName.toLowerCase().trim();
  return categoryImages[name] || categoryImages['default'];
};

const CategoryCard = ({ _id, name, description }) => {
  const categoryImage = getCategoryImage(name);

  return (
    <Link 
      to={`/shop/${_id}`} 
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={categoryImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D4A574] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Explore Button */}
        <div className="flex items-center gap-2 text-[#D4A574] font-semibold">
          <span>Explore</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A574] dark:group-hover:border-[#C89F6F] rounded-2xl transition-colors pointer-events-none"></div>
    </Link>
  );
};

export default CategoryCard;