import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-5/6 flex flex-row justify-between mx-auto my-5">
      {/* Logo */}
      <div className="font-semibold text-3xl lg:text-5xl text-indigo-500">
        marweb.
      </div>
      <div className="hidden md:flex flex-row flex-shrink-0 justify-end lg:justify-between w-1/2 lg:w-1/4">
        {/* Nav buttons */}
        <ul className="hidden lg:flex flex-row self-center text-lg">
          <li className="mx-2">
            <a href="">Home </a>
          </li>
          <li className="mx-2">
            <a href="">Shop</a>
          </li>
          <li className="mx-2">
            <a href="">Blog</a>
          </li>
        </ul>
        {/* Login and signup */}
        <div className="flex flex-shrink-0 self-center">
          <button className="mx-2 px-6 py-2 border rounded-md border-indigo-500">
            Login
          </button>
          <button className="mx-2 px-6 py-2 border rounded-md bg-indigo-500 text-white">
            Sing up
          </button>
        </div>
      </div>
    </nav>
  );
}
