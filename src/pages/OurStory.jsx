import React from 'react';

const OurStory = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
      <p>Here you can write the story of Timofey & Natalia's journey together...</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="placeholder h-64 bg-gray-300">[Photo Placeholder]</div>
        <div className="placeholder h-64 bg-gray-300">[Photo Placeholder]</div>
      </div>
    </div>
  );
};

export default OurStory;