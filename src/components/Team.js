// components/Team.js
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Simon Chladek',
      role: 'Project Leader',
      email: 'schladek@student.tgm.ac.at',
      image: 'chladek.jpeg'
    },
    {
      name: 'Deniz Kural',
      role: 'Team Member',
      email: 'dkural@student.tgm.ac.at',
      image: 'kural.jpeg'
    },
    {
      name: 'Martin Simov',
      role: 'Team Member',
      email: 'msimov@student.tgm.ac.at',
      image: 'simov.jpeg'
    },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.image} alt={member.name} className="w-64 h-64 mx-auto rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;