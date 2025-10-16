// components/Media.js
import React from 'react';

const Media = () => {
  const images = [
    'https://placehold.co/400x300?text=Media1',
    'https://placehold.co/400x300?text=Media2',
    'https://placehold.co/400x300?text=Media3',
    'https://placehold.co/400x300?text=Media4',
    'https://placehold.co/400x300?text=Media5',
    'https://placehold.co/400x300?text=Media6',
  ];

  return (
    <section id="media" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center">Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Media ${index + 1}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </section>
  );
};

export default Media;