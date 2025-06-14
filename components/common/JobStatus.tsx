import React from "react";

const JobStatusCard = () => {
  return (
    <div className="w-full space-y-4">
      {/* Additional info card - with subtle animation */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-0 hover:opacity-30 animate-ping transition-opacity duration-300"></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Open to new opportunities and exciting projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobStatusCard;
