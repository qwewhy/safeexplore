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
    </div>
  );
}

export default About;