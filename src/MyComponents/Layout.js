import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, Home, Heart, ShoppingCart, User } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      alert("This page is home page");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Navigation */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-4" />
            <h1 className="text-2xl font-bold">SafeExplore</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline" onClick={handleHomeClick}>Home</Link>
            <Link to="/safety-tips" className="hover:underline">Safety Tips</Link>
            <Link to="/community" className="hover:underline">Community</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/UnityGame" className="hover:underline">MyIsland</Link>
            <Link to="/AchievementsPage" className="hover:underline">Achievements</Link>
          </nav>
          <Bell className="w-6 h-6" />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer has been removed as it's not present in the image */}
      {/* 页脚 */}
      <footer className="bg-blue-800 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 SafeExplore. Stay safe, explore confidently.</p>
          </div>
      </footer>
    </div>
  );
};

export default Layout;