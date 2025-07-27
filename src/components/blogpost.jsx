import React, { useEffect, useState } from 'react';

const Blogpost = () => {
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleSend = () => {
    if (!comment.trim()) {
      alert("Please enter a comment before sending.");
      return;
    }

    console.log("Comment submitted:", comment);
    console.log("Rating submitted:", rating);
    alert("Thanks for your feedback!");
    setComment('');
    setRating(0);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col gap-10">
      {blogs.length === 0 ? (
        <div className="text-gray-600 ">
          <h1 className='text-2xl text-center'>Guide:</h1>
          <p>The app has two views:
            <br />
            i. User View (default homepage): shows all blogs from localStorage.
            <br />
            ii. Admin View: accessible via /admin, where the admin logs in using admin / admin.
            <br />
            <br />
            After login, the admin is redirected to the dashboard to add or manage blogs. A cookie keeps the admin logged in for 1 hour, allowing direct access to the dashboard without re-login. Blogs are stored in localStorage and shown on the homepage.</p>
        </div>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
            {/* Main Blog Content */}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[70%]">
                <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.about}</p>
                <p className="text-sm text-blue-600 mt-2">
                  Source:{' '}
                  <a
                    href={blog.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-800"
                  >
                    {blog.source}
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">Contact: {blog.contact}</p>
              </div>

              <div className="md:w-[25%] mt-4 md:mt-0">
                <img
                  src={blog.img || '/src/assets/img/header.jpg'}
                  alt={blog.title}
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Comment Section */}
            <div className="w-full mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Leave a Comment & Rate</h3>

              <textarea
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
              />

              <div className="flex items-center mt-3 space-x-2">
                {stars.map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    type="button"
                    className={`text-3xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                      } transition-colors`}
                  >
                    ★
                  </button>
                ))}
                <span className="ml-3 text-gray-600">{rating} / 5</span>
              </div>

              <button
                onClick={handleSend}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Send Comment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogpost;
