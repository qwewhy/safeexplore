import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    { name: 'ShiWei Wong' },
    { name: 'Ler Theng Loo' },
    { name: 'Ming Liu' },
    { name: 'Chenxi Li' },
    { name: 'Hongyuan Wang' },
    { name: 'Xiaodi Yao' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="bg-blue-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SafeTravels</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline transition duration-300">Home</Link>
            <Link to="/safety-tips" className="hover:underline transition duration-300">Safety Tips</Link>
            <Link to="/community" className="hover:underline transition duration-300">Community</Link>
            <Link to="/about" className="hover:underline transition duration-300">About</Link>
            <Link to="/UnityGame" className="hover:underline">MyIsland</Link>
            <Link to="/AchievementsPage" className="hover:underline">Achievements</Link>
          </div>
        </div>
      </nav>

      {/* 主体内容 */}
      <main
        className="flex-grow text-white py-12"
        style={{
          background: 'linear-gradient(to bottom right, #00008B, #8B008B)',
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-center mb-12">
            We are a dedicated team from UTS, committed to ensuring safe travels for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 组员卡片 */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                <img 
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(member.name)}`} 
                  alt={`${member.name}'s avatar`}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-center">Student at UTS</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-blue-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SafeTravels. Stay safe, explore confidently.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;