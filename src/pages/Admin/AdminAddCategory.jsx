import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/axios'

const AdminAddCategory = () => {
    const [form,setForm] = useState({name:"",description:""})
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value,}
        )
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
try {
            await api.post('admin/categories',form)
            alert("new category created.")
           navigate("/admin/categories")
} catch (error) {
    console.log(error);
    alert("failed to add category")
    
}
    }
  return (
        <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Categories</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Category Name"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          create Category
        </button>
      </form>
    </div>
  )
}

export default AdminAddCategory