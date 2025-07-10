import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-blue-500">
      <ul className="text-white flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 text-xl md:text-2xl p-4">
        <li className="px-5 py-5 hover:bg-blue-600 hover:cursor-pointer transition"><Link to ='/login'>Login</Link></li>
        <li className="px-5 py-5 hover:bg-blue-600 hover:cursor-pointer transition"><Link to='/home'>Home </Link></li>
        <li className="px-5 py-5 hover:bg-blue-600 hover:cursor-pointer transition"><Link to='/about'>About Us </Link></li>
        <li className="px-5 py-5 hover:bg-blue-600 hover:cursor-pointer transition"><Link to='/contact'>Contact </Link></li>
        <li className="px-5 py-5 hover:bg-blue-600 hover:cursor-pointer transition"><Link to='/reacthookform'>React Hook Form</Link></li>
      </ul>
    </nav>
  );
}
