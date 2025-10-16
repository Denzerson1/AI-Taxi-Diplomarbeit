// components/Progress.js
import React from 'react';

const Progress = () => {
  return (
    <section id="progress" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-400">Project Progress</h2>
      <p className="text-center mb-12">Documentation of our development journey</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-3xl font-bold">33%</h3>
          <p>Project Progress</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-3xl font-bold">3/9</h3>
          <p>Completed Milestones</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-3xl font-bold">3</h3>
          <p>Team Members</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h3 className="text-3xl font-bold">180+</h3>
          <p>Total Working Hours</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="mb-2">Overall Progress</p>
        <div className="bg-gray-800 rounded-full h-4">
          <div className="bg-blue-500 w-[36%] h-4 rounded-full"></div>
        </div>
        <p className="text-right">33%</p>
      </div>
      <div className="text-center mt-8">
        <a 
          href="https://projekte.tgm.ac.at/youtrack/projects/eda0a9c2-ae29-4ff0-9e7b-edff352478ff" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition"
        >
          YouTrack
        </a>
      </div>
    </section>
  );
};

export default Progress;