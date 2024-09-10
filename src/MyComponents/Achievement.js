import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const Achievement = ({ title, description, isAchieved, achievedDate, progress }) => {
  const backgroundClass = isAchieved
    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
    : 'bg-gray-700'; // Changed from bg-gray-300 to bg-gray-700 for better contrast

  return (
    <div className={`${backgroundClass} rounded-lg p-4 text-white relative overflow-hidden`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
      {isAchieved ? (
        <div className="flex items-center mt-2">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span className="text-xs">Achieved on {achievedDate}</span>
        </div>
      ) : (
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs">Progress: {progress}%</span>
            <Clock className="w-4 h-4" />
          </div>
          <div className="w-full bg-gray-500 rounded-full h-2 mt-1"> {/* Changed from bg-gray-200 to bg-gray-500 */}
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${progress}%` }}></div> {/* Changed from bg-blue-600 to bg-blue-400 for better visibility */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievement;