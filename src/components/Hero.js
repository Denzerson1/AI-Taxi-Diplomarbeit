// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900">
      <h1 className="text-5xl font-bold mb-4">Monaco Energy Boat Challenge 2025 – AI-Controlled Boat</h1>
      <p className="text-xl mb-8 max-w-2xl">Diploma project by team Simon Chladek, Martin Simov, and Deniz Sinan Kural. Participating in the AI Challenge for the first time in Monaco bay.</p>
      <a 
        href="#about" 
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;