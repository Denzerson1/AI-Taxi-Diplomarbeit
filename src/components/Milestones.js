// components/Milestones.js
import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      date: '17.10.2025',
      status: 'Completed',
      title: 'Feasibility Study',
      description: 'Conduct initial feasibility study for the project.'
    },
    {
      date: '07.11.2025',
      status: 'Completed',
      title: 'Object Detection Prototype',
      description: 'Develop a prototype for object detection.'
    },
    {
      date: '28.11.2025',
      status: 'Completed',
      title: 'Unity Environment Set-Up',
      description: 'Set up the Unity environment for development.'
    },
    {
      date: '19.12.2025',
      status: 'Pending',
      title: 'Interface from Unity to AI',
      description: 'Create interface between Unity and AI systems.'
    },
    {
      date: '09.01.2026',
      status: 'Pending',
      title: 'Working Boat in Unity with AI',
      description: 'Integrate a working boat model with AI in Unity.'
    },
    {
      date: '13.02.2026',
      status: 'Pending',
      title: 'Data Transfer Optimization',
      description: 'Optimize data transfer processes.'
    },
    {
      date: '27.02.2026',
      status: 'Pending',
      title: 'Pathfinding Algorithm Tests',
      description: 'Conduct tests on pathfinding algorithms.'
    },
    {
      date: '13.03.2026',
      status: 'Pending',
      title: 'Final Working Prototype',
      description: 'Complete the final working prototype.'
    },
    {
      date: '27.03.2026',
      status: 'Pending',
      title: 'Diploma Project Handover',
      description: 'Hand over the completed diploma project.'
    },
  ];

  return (
    <section id="milestones" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-400">Milestones</h2>
      <p className="text-center mb-12">The path to our diploma project</p>
      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
        {milestones.map((ms, index) => (
          <div key={index} className="mb-8 flex items-center relative">
            <div className="w-32 text-right pr-4">{ms.date}</div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
              {ms.status === 'Completed' ? <span className="text-white">✓</span> : <span className="text-white">○</span>}
            </div>
            <div className="flex-1 pl-4 bg-gray-700 p-4 rounded-lg flex items-center">
              <span className={`inline-block px-3 py-1 rounded-full text-sm mr-4 ${ms.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-200'}`}>
                {ms.status}
              </span>
              <div>
                <h3 className="font-semibold">{ms.title}</h3>
                <p className="text-sm text-gray-300">{ms.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;