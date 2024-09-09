import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Globe, Users, Search, Bell, Map, Star, Book } from 'lucide-react';


const HomePage = () => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      alert("This page is home page");
      setShowAlert(false);
    }
  }, [showAlert]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      setShowAlert(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SafeTravels</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline" onClick={handleHomeClick}>
              Home
            </Link>
            <Link to="/safety-tips" className="hover:underline">
              Safety Tips
            </Link>
            <Link to="/community" className="hover:underline">
              Community
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Travel Safely, Explore Confidently
            </h2>
            <p className="text-xl mb-8">
              Get reliable safety information and connect with fellow travelers
            </p>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search for a destination..."
                className="p-2 rounded-l-lg w-64 text-black"
              />
              <button className="bg-yellow-500 text-blue-900 p-2 rounded-r-lg">
                <Search size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Choose SafeTravels?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Shield size={48} />}
                title="Reliable Safety Information"
                description="Access up-to-date safety tips and alerts for destinations worldwide."
              />
              <FeatureCard
                icon={<Globe size={48} />}
                title="Global Coverage"
                description="Find information for countries and cities across the globe."
              />
              <FeatureCard
                icon={<Users size={48} />}
                title="Traveler Community"
                description="Connect with other travelers, share experiences, and get advice."
              />
              <FeatureCard
                icon={<Bell size={48} />}
                title="Real-time Alerts"
                description="Receive instant notifications about safety updates in your travel destinations."
              />
              <FeatureCard
                icon={<Map size={48} />}
                title="Interactive Maps"
                description="Explore interactive maps with safety information overlays for better trip planning."
              />
              <FeatureCard
                icon={<Star size={48} />}
                title="Personalized Recommendations"
                description="Get tailored safety recommendations based on your travel preferences and history."
              />
              <FeatureCard
                icon={<Book size={48} />}
                title="Travel Guides"
                description="Access comprehensive travel guides with safety information for popular destinations."
              />
              <FeatureCard
                icon={<Shield size={48} />}
                title="Emergency Resources"
                description="Quick access to emergency contacts and resources for every destination."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SafeTravels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
      <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;
