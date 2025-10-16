// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center">About the Project</h2>
      <div className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Background</h3>
        <p>The Monaco Energy Boat Challenge is an annual event. TGM is participating in the AI Challenge for the first time in 2025. The objective is for the AI to navigate three buoys along the fastest and most efficient path using circular trajectories.</p>
        <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">Individual Topics</h3>
        <p><strong>Simon Chladek:</strong> Object Detection & Classification – Buoy detection, data transfer</p>
        <p><strong>Martin Simov:</strong> 3D Camera Integration – Unity interface, data transfer, performance tests</p>
        <p><strong>Deniz Kural:</strong> Pathfinding & Reinforcement Learning – AI navigation optimization</p>
      </div>
    </section>
  );
};

export default About;