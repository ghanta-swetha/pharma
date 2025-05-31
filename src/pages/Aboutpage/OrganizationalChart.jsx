import React from 'react';

const OrganizationalStructure = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      {/* Header Section - Always visible */}
      <div className="md:text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-[Quicksand] font-bold text-green-600 mb-4">
          Our Organizational Structure
        </h1>
        <p className="text-gray-700 text-sm  md:text-base font-[Roboto] leading-relaxed max-w-7xl mx-auto md:px-4">
          We believe in streamlined operations and clear leadership. Our well-defined hierarchy ensures efficiency, 
          accountability, and excellence across all departments—from production and quality control to maintenance and 
          warehousing.
        </p>
      </div>

      {/* Organizational Chart - Visible on all screens */}
      <div>
        {/* Large devices (desktop) - lg and up */}
        <div className="hidden lg:block">
          <img 
            src="/assets/aboutpage/chat 1.png" 
            alt="Organizational Chart - Large View"
            className="w-full h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Medium and small devices (tablet and mobile) */}
        <div className="block lg:hidden">
          <img 
            src="/assets/aboutpage/chat 1.png" 
            alt="Organizational Chart - Medium and Small View"
            className="w-full h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;