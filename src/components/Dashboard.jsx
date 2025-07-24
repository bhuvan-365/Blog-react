import React, { useState } from 'react';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    about: '',
    source: '',
    contact: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update existing blog
      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = formData;
      setBlogs(updatedBlogs);
      setEditIndex(null);
    } else {
      // Add new blog
      setBlogs(prev => [...prev, formData]);
    }

    setSubmitted(true);
    setFormData({
      img: '',
      title: '',
      about: '',
      source: '',
      contact: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditIndex(index);
    setSubmitted(false);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(prev => prev.filter((_, i) => i !== index));
      if (editIndex === index) {
        setEditIndex(null);
        setFormData({
          img: '',
          title: '',
          about: '',
          source: '',
          contact: '',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Admin Blog Portal
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side - Form */}
        <div className="md:w-1/2 bg-white rounded shadow p-6">
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Blog {editIndex !== null ? 'updated' : 'added'} successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="img" className="block mb-1 font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="img"
                name="img"
                value={formData.img}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="title" className="block mb-1 font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Blog Title"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="about" className="block mb-1 font-medium text-gray-700">
                About
              </label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Brief description about the blog"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="source" className="block mb-1 font-medium text-gray-700">
                Source
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                placeholder="Source of the blog (website or author)"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block mb-1 font-medium text-gray-700">
                Contact
              </label>
              <input
                type="email"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              {editIndex !== null ? 'Update Blog' : 'Add Blog'}
            </button>
          </form>
        </div>

        {/* Right side - Blog List */}
        <div className="md:w-1/2 bg-white rounded shadow p-6 overflow-auto max-h-[80vh]">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Blogs List</h2>

          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs added yet.</p>
          ) : (
            <ul className="space-y-6">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {blog.img ? (
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-24 h-16 bg-gray-200 flex items-center justify-center rounded text-gray-400 text-xs">
                        No Image
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{blog.title}</h3>
                      <p className="text-gray-700">{blog.about}</p>
                      {blog.source && (
                        <p className="text-sm text-gray-500">Source: {blog.source}</p>
                      )}
                      {blog.contact && (
                        <p className="text-sm text-gray-500">Contact: {blog.contact}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(index)}
                      title="Edit"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536m2.121-6.364L9 17.657V21h3.343l7.657-7.657a1 1 0 00-1.414-1.414L9 17.657z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      title="Delete"
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
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
