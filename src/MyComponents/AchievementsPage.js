import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Achievement from "./Achievement";
import {
  User,
  Cake,
  Users,
  Camera,
  Plane,
} from "lucide-react";


const AchievementsPage = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/achievements');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAchievements(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching achievements:', error);
      setError('Failed to load achievements. Please try again later.');
      setLoading(false);
    }
  };

  const completedAchievements = achievements.filter((a) => a.isAchieved).length;
  const totalAchievements = achievements.length;
  const progressPercentage = totalAchievements ? (completedAchievements / totalAchievements) * 100 : 0;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-red-500">
        <div className="container mx-auto px-4 py-8">
          {/* User profile card - 开始 */}
          <div className="bg-gradient-to-br from-blue-800 to-purple-900 rounded-lg shadow-lg p-6 mb-8 flex flex-col items-center">
            {/* 头像和等级环 - 开始 */}
            <div className="relative mb-4 w-40 h-40">
              {/* 经验环 - 开始 */}
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#4a5568"
                  strokeWidth="4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="4"
                  strokeDasharray="301.59"
                  strokeDashoffset={301.59 * (1 - progressPercentage / 100)}
                  transform="rotate(90 50 50)"
                />
              </svg>
              {/* 经验环 - 结束 */}

              {/* 头像 */}
              <div className="absolute inset-2 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <User size={80} className="text-gray-600" />
              </div>

              {/* 等级指示器 */}
              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 text-white text-xs font-bold">
                LEVEL 5
              </div>
            </div>
            {/* 头像和等级环 - 结束 */}

            <h2 className="text-2xl font-bold text-white mb-4">PROFILE</h2>

            <div className="w-full grid grid-cols-2 gap-3">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center text-white">
                <Cake className="mr-2 text-blue-300" size={20} />
                <div>
                  <p className="text-xs text-blue-300">Age</p>
                  <p className="font-semibold">28</p>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center text-white">
                <Users className="mr-2 text-green-300" size={20} />
                <div>
                  <p className="text-xs text-green-300">Gender</p>
                  <p className="font-semibold">Male</p>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center text-white">
                <Camera className="mr-2 text-yellow-300" size={20} />
                <div>
                  <p className="text-xs text-yellow-300">Hobby</p>
                  <p className="font-semibold">Photography，hiking</p>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 flex items-center text-white">
                <Plane className="mr-2 text-pink-300" size={20} />
                <div>
                  <p className="text-xs text-pink-300">Favorite Destination</p>
                  <p className="font-semibold">Japan</p>
                </div>
              </div>
            </div>
          </div>
          {/* User profile card - 结束 */}

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Friend Island</h3>
            <h3 className="text-2xl font-bold text-white">Achievement List</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Achievement
                key={index}
                title={achievement.title}
                description={achievement.description}
                isAchieved={achievement.isAchieved}
                achievedDate={achievement.achievedDate}
                progress={achievement.progress}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default AchievementsPage;
