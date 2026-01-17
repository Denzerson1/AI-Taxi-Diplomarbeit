// components/Milestones.js
import React from 'react';

const Milestones = () => {
  const milestones = [
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
      status: 'Completed',
      title: 'Interface from Unity to AI',
      description: 'Create interface between Unity and AI systems.'
    },
    {
      date: '09.01.2026',
      status: 'Completed',
      title: 'Working Boat in Unity with AI',
      description: 'Integrate a working boat model with AI in Unity.'
    },
    {
      date: '25.01.2025',
      status: 'Completed',
      title: 'Feasibility Study',
      description: 'Conduct initial feasibility study for the project.'
    },
    {
      date: '03.02.2026',
      status: 'In Progress',
      title: 'Behaviour Cloning paired with RL in Unity',
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
    <section id="milestones" className="pt-28 pb-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Milestones</h2>
      <p className="text-center mb-12 text-base">The path to our diploma project</p>
      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500"></div>
        {milestones.map((ms, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-center justify-center md:justify-start relative"
          >
            {/* Date - Hidden on mobile, shown on md and up */}
            <div className="w-full md:w-36 text-right pr-2 md:pr-6 text-xs md:text-sm mb-1 md:mb-0 hidden md:block">
              {ms.date}
            </div>
            {/* Timeline Circle */}
            <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-blue-500 flex items-center justify-center z-10 ml-0.5 md:ml-0 md:-ml-4">
              {ms.status === 'Completed' ? (
                <span className="text-white text-xs md:text-sm">✓</span>
              ) : (
                <span className="text-white text-xs md:text-sm">○</span>
              )}
            </div>
            {/* Content */}
            <div className="w-full md:w-96 pl-2 md:pl-6 bg-gray-700 p-2 md:p-4 rounded-lg flex items-center justify-between">
              <span
                className={`inline-block px-1 md:px-3 py-1 rounded-full text-xs md:text-sm mr-2 ${
                  ms.status === 'Completed'
                    ? 'bg-green-500 text-white'
                    : ms.status === 'In Progress'
                    ? 'bg-orange-300 text-gray-900'
                    : 'bg-gray-500 text-gray-200'
                }`}
              >
                {ms.status}
              </span>
              <div className="ml-4 flex-1 min-w-0">
                <h3 className="font-semibold text-sm md:text-lg">{ms.title}</h3>
                <p className="text-xs md:text-sm text-gray-300">{ms.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;