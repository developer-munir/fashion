import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/singin'>Singin</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Fashion</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="text"
          placeholder="Search..."
          className="input bg-base-300 "
        />
        <Link className="ml-5">
        <FaUserCircle size={40}></FaUserCircle>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
