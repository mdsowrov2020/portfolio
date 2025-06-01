import React from "react";

const RecentWin = () => {
  return (
    <div className="relative group">
      <div className="relative backdrop-blur-xl rounded-2xl p-6 border bg-gradient-to-br from-gray-200/30 to-gray-300/30 dark:from-gray-800/30 dark:to-gray-700/30 border-gray-300/50 dark:border-gray-700/50 transition-all duration-500">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Recent Wins
        </h4>
        <div className="space-y-4">
          <div className="group/item flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                E-commerce Platform
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built scalable React app with 40% faster load times
              </p>
            </div>
          </div>
          <div className="group/item flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                SaaS Dashboard
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complex data visualization with real-time updates
              </p>
            </div>
          </div>
          <div className="group/item flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                Mobile-First Redesign
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Improved mobile conversion by 65%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWin;
