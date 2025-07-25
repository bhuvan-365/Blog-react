import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    about: '',
    source: '',
    contact: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  // Load blogs from localStorage on mount
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      try {
        setBlogs(JSON.parse(storedBlogs));
      } catch {
        setBlogs([]);
      }
    }
  }, []);

  // Save blogs to localStorage whenever blogs change
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Use base64 for image instead of URL.createObjectURL
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, img: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  });

  const truncateText = (text, maxLength = 60) => {
    if (!text) return '';
    const sentenceEnd = text.match(/[.!?]/);
    if (sentenceEnd) {
      const firstSentence = text.substring(0, sentenceEnd.index + 1);
      if (firstSentence.length <= maxLength) {
        return firstSentence;
      }
    }
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlogs = [...blogs];
    if (editIndex !== null) {
      updatedBlogs[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedBlogs.push(formData);
    }
    setBlogs(updatedBlogs);
    setFormData({ img: '', title: '', about: '', source: '', contact: '' });
  };

  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = blogs.filter((_, i) => i !== index);
    setBlogs(filtered);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ img: '', title: '', about: '', source: '', contact: '' });
    }
  };

  // Updated logout handler with redirect
  const handleLogout = () => {
    logout();         // remove auth cookie and set isAdmin false
    navigate('/admin'); // redirect to admin login page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">Admin Dashboard</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Form Side */}
        <div className="bg-white rounded-xl p-3 md:p-4 shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-700">
            {editIndex !== null ? 'Edit Blog' : 'Add New Blog'}
          </h2>

          {/* Dropzone */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed rounded-md h-32 md:h-40 flex items-center justify-center mb-3 md:mb-4 cursor-pointer bg-gray-50"
          >
            <input {...getInputProps()} />
            {formData.img ? (
              <img src={formData.img} alt="Preview" className="h-full object-contain rounded-md" />
            ) : (
              <p className="text-gray-500 text-xs md:text-sm text-center px-2">
                {isDragActive ? "Drop the image here..." : "Drag 'n' drop or click to upload image"}
              </p>
            )}
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full px-3 py-2 border rounded-md text-xs md:text-sm"
              required
            />
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="About"
              className="w-full px-3 py-2 border rounded-md text-xs md:text-sm resize-none"
              rows={4}
              required
            />
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Source"
              className="w-full px-3 py-2 border rounded-md text-xs md:text-sm"
            />
            <input
              type="email"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Email"
              className="w-full px-3 py-2 border rounded-md text-xs md:text-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs md:text-sm font-medium"
            >
              {editIndex !== null ? 'Update Blog' : 'Add Blog'}
            </button>
          </form>

          {/* Logout Button with redirect */}
          <button
            onClick={handleLogout}
            className="text-center text-red-600 px-4 py-2 rounded mt-4 hover:bg-red-700 transition"
          >
            Logout
          </button>

          {/* <button
            onClick={() => {
              localStorage.removeItem('blogs');
              setBlogs([]);
            }}
            className="text-sm text-gray-500 underline mt-2"
          >
            Clear All Blogs
          </button> */}
        </div>

        {/* Blog List */}
        <div className="bg-white rounded-xl p-3 md:p-4 shadow-md overflow-auto max-h-[70vh] md:max-h-[80vh]">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-700">Blogs</h2>

          {blogs.length === 0 ? (
            <p className="text-gray-500 text-sm">No blogs added yet.</p>
          ) : (
            <ul className="space-y-3 md:space-y-4">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className="border rounded-md p-2 md:p-3 flex flex-col sm:flex-row items-start justify-between gap-2 md:gap-4"
                >
                  <div className="flex gap-2 md:gap-3 w-full">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-16 h-12 md:w-20 md:h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base truncate">{blog.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                        {truncateText(blog.about, 50)}
                      </p>
                      {blog.source && (
                        <p className="text-gray-500 text-xs truncate">Source: {blog.source}</p>
                      )}
                      {blog.contact && (
                        <p className="text-gray-500 text-xs truncate">Contact: {blog.contact}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-1 md:gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:underline text-xs md:text-sm px-2 py-1 sm:px-0"
                    >
                      <img src="/src/assets/svgs/edit.svg" alt="edit" />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:underline text-xs md:text-sm px-2 py-1 sm:px-0"
                    >
                      <img src="/src/assets/svgs/trash.svg" alt="del" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
