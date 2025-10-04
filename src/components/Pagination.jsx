import React from 'react';

const Pagination = ({ userPerPage, totalUsers, currentPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 mt-4 justify-center">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={`px-3 py-1 border rounded 
            ${currentPage === p ? "bg-blue-500 text-white" : "hover:bg-gray-200"}
          `}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
