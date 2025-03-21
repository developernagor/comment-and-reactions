import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  const user = {
    userName: "Mehedi",
    userEmail: "developernagor@gmail.com",
    userPhoto:"https://ibb.co.com/3YNthfZ"
  };

  return (
    <div className="navbar bg-opacity-90 backdrop-blur-lg bg-white shadow-md px-6 py-3">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
          TaskVibe 🚀
        </Link>
      </div>

      {/* Centered Menu */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
        <Link to="/add-task" className="text-gray-600 hover:text-indigo-600 transition font-medium">Add Task</Link>
        <Link to="/all-task" className="text-gray-600 hover:text-indigo-600 transition font-medium">All Tasks</Link>
      </div>

      {/* Right Side - Avatar & Login */}
      <div className="dropdown dropdown-end">
        {user.userEmail ? (
          <>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border border-gray-300">
                <img
                  alt="User Avatar"
                  src={user?.userPhoto}
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box shadow-md mt-3 w-52 p-2">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </>
        ) : (
          <Link to="/login" className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
