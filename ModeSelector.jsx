// components/ModeSelector.jsx

import React from 'react';

const modes = [
  { name: 'Beginner', value: 'beginner' },
  { name: 'Intermediate', value: 'intermediate' },
  { name: 'Expert', value: 'expert' },
];

const ModeSelector = ({ currentMode, onModeChange }) => {
  return (
    <div className="flex flex-col items-center my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Select Difficulty Level</h2>
      <div className="flex gap-4">
        {modes.map((mode) => (
          <button
            key={mode.value}
            className={`px-6 py-2 rounded-lg transition-colors font-medium ${
              currentMode === mode.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
            }`}
            onClick={() => onModeChange(mode.value)}
          >
            {mode.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;
