import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="placeholder h-64 bg-gray-300">[Photo Placeholder]</div>
        <div className="placeholder h-64 bg-gray-300">[Photo Placeholder]</div>
        <div className="placeholder h-64 bg-gray-300">[Photo Placeholder]</div>
      </div>
    </div>
  );
};

export default Gallery;