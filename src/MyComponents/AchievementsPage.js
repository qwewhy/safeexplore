import React from 'react';
import Layout from './Layout';
import Achievement from './Achievement';
import {User, Award, Bell, Map, Star, Book } from 'lucide-react';

  const achievements = [
      { title: "Digital Nomad Novice", description: "Register an account", isAchieved: true, achievedDate: "2023-05-15" },
      { title: "Safety Superhero", description: "Complete the safety orientation tutorial", isAchieved: true, achievedDate: "2023-05-20" },
      { title: "Passport Stamps Collector", description: "Visit 5 different countries", isAchieved: true, achievedDate: "2023-07-10" },
      { title: "Risk Radar Ace", description: "Read 10 risk assessment reports", isAchieved: true, achievedDate: "2023-08-05" },
      { title: "Travel Guru", description: "Submit 5 travel safety tips", isAchieved: true, achievedDate: "2023-09-01" },
      { title: "Time-Bending Traveler", description: "Book a trip 6 months in advance", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Green Globetrotter", description: "Use eco-friendly transportation on 3 trips", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Culture Vulture", description: "Attend 5 local cultural events during travels", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "App Wizard", description: "Use all app features on a single trip", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Off-the-Grid Explorer", description: "Visit 3 off-the-beaten-path destinations", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Polyglot Prodigy", description: "Learn basic phrases in 5 different languages", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Insta-worthy Adventurer", description: "Share 50 travel photos through the app", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Prepared Pathfinder", description: "Complete the emergency preparedness course", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Nomad of the Month", description: "Complete a trip lasting over 30 days", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Climate Chameleon", description: "Travel to destinations with 4 different climates", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Feedback Aficionado", description: "Provide feedback on 20 different locations", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Triple Threat Traveler", description: "Complete journeys by air, sea, and land", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Sky High Club", description: "Accumulate 1,000,000 kilometers in flight", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Continental Conqueror", description: "Visit Asia, Europe, Americas, Africa, and Oceania", isAchieved: false, progress: Math.floor(Math.random() * 100) },
      { title: "Million Mile Maestro", description: "Accumulate 1,000,000 miles of safe travel", isAchieved: false, progress: Math.floor(Math.random() * 100) }
    ];
  
    const AchievementsPage = () => {
        const completedAchievements = achievements.filter(a => a.isAchieved).length;
        const totalAchievements = achievements.length;
        const progressPercentage = (completedAchievements / totalAchievements) * 100;
    
        return (
          <Layout>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-red-500">
              <div className="container mx-auto px-4 py-8">
                {/* User profile card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-300 rounded-full p-2 mr-4">
                      <User size={64} className="text-gray-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">John Doe's Achievements</h2>
                      <p className="text-gray-600">Explorer Level: Advanced</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Award className="text-yellow-500 mr-2" />
                      <span className="font-semibold">{completedAchievements} of {totalAchievements} Achieved</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-blue-500 mr-2" />
                      <span className="font-semibold">1250 Points</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white">Achievement List</h3>
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
          </Layout>
        );
    };
    
  
  export default AchievementsPage;