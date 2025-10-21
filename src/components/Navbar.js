// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 flex items-center justify-between z-50">
      <div className="flex items-center">
        <img src="/mebc_logo.PNG" alt="Logo" className="mr-2 h-14" />
        {/*<span className="text-2xl font-bold">Monaco Energy Boat Challenge</span> */}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-6 absolute md:static top-16 right-6 bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-blue-400 transition py-2">About</a>
        <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-blue-400 transition py-2">Team</a>
        <a href="#milestones" onClick={(e) => handleScroll(e, 'milestones')} className="hover:text-blue-400 transition py-2">Milestones</a>
        <a href="#progress" onClick={(e) => handleScroll(e, 'progress')} className="hover:text-blue-400 transition py-2">Progress</a>
        <a href="#media" onClick={(e) => handleScroll(e, 'media')} className="hover:text-blue-400 transition py-2">Media</a>
        <a href="#imprint" onClick={(e) => handleScroll(e, 'imprint')} className="hover:text-blue-400 transition py-2">Imprint</a>
      </div>
    </nav>
  );
};

export default Navbar;