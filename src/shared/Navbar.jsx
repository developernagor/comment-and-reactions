import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="navbar justify-between bg-base-100 shadow-sm">
      <div className="flex-start">
        <Link to="/" className="btn btn-ghost text-xl">CR TECH</Link>
      </div>

      <div className="navbar-center lg:flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
            <li><Link to="/add-task">Add Task</Link></li>
            <li><Link to="/all-task">All Tasks</Link></li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><Link to="/add-task">Add Task</Link></li>
          <li><Link to="/all-task">All Tasks</Link></li>
        </ul>
      </div>

      <div className="flex-end dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
