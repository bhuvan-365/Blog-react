import React from 'react'

const account = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white border border-black rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Account</h1>
        <p className="text-gray-600 mb-6">This section is currently unavailable. Please check back later.</p>

        {/* Example default template - placeholder profile info */}
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              disabled
              placeholder="user123"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              disabled
              placeholder="user@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Since</label>
            <input
              type="text"
              disabled
              placeholder="January 2023"
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default account