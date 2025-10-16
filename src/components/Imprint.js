// components/Imprint.js
import React from 'react';

const Imprint = () => {
  const team = [
    { name: 'Simon Chladek (Project Leader)', email: 'schladek@student.tgm.ac.at' },
    { name: 'Deniz Sinan Kural', email: 'dkural@student.tgm.ac.at' },
    { name: 'Martin Simov', email: 'msimov@student.tgm.ac.at' },
  ];

  return (
    <section id="imprint" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400 border-b-2 border-blue-500 pb-4">Imprint</h2>
      <div className="max-w-4xl mx-auto">
        <div className="border-l-4 border-blue-500 pl-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-400">Project Information</h3>
          <p className="text-white text-base sm:text-lg">Project Name: <span className="text-blue-300">Monaco Energy Boat Challenge 2025 – AI-Controlled Boat</span></p>
          <p className="text-white text-base sm:text-lg">Project Type: <span className="text-blue-300">Diploma Thesis in System Technology</span></p>
          <p className="text-white text-base sm:text-lg">Institution: <span className="text-blue-300">TGM Vienna</span></p>
          <p className="text-white text-base sm:text-lg">School Year: <span className="text-blue-300">2025/2026</span></p>
          <p className="text-white text-base sm:text-lg">Supervisor: <span className="text-blue-300">Eugen Robert Jiresch</span></p>
        </div>

        <div className="border-l-4 border-blue-500 pl-6 mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-400">Project Team</h3>
          {team.map((member, index) => (
            <p key={index} className="text-white text-base sm:text-lg mb-2">
              {member.name} <span className="text-blue-300">{member.email}</span>
            </p>
          ))}
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-400">Liability Disclaimer</h3>
          <p className="text-white text-base sm:text-lg">This website was created as part of a diploma thesis and serves exclusively for educational and presentation purposes.</p>
          <p className="text-white mt-2 sm:mt-4 text-base sm:text-lg">Content of the Website: The content of this website was created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.</p>
          <p className="text-white mt-2 sm:mt-4 text-base sm:text-lg">External Links: This website contains links to external websites of third parties, over whose content we have no influence. The respective provider or operator of the pages is responsible for this content.</p>
          <p className="text-white mt-2 sm:mt-4 text-base sm:text-lg">Copyright: The content and works created by the project members on this website are subject to Austrian copyright law. All media used were either self-created or come from license-free sources.</p>
        </div>

        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 border-t-2 border-gray-700 pt-2 sm:pt-4">
          © 2025 Monaco Energy Boat Challenge - Diploma Project | TGM Vienna<br />Last Update: October 16, 2025
        </p>
      </div>
    </section>
  );
};

export default Imprint;