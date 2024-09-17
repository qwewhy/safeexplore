import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, Home, Heart, ShoppingCart, User } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();

  const handleNavClick = (e, path, pageName) => {
    if (location.pathname === path) {
      e.preventDefault();
      alert(`This page is ${pageName} page`);
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
            <Link
              to="/"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/', 'Home')}
            >
              Home
            </Link>
            <Link
              to="/safety-tips"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/safety-tips', 'Safety Tips')}
            >
              Safety Tips
            </Link>
            <Link
              to="/community"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/community', 'Community')}
            >
              Community
            </Link>
            <Link
              to="/about"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/about', 'About')}
            >
              About
            </Link>
            <Link
              to="/UnityGame"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/UnityGame', 'MyIsland')}
            >
              MyIsland
            </Link>
            <Link
              to="/AchievementsPage"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/AchievementsPage', 'Achievements')}
            >
              Achievements
            </Link>
            <Link
              to="/LocationOverviewPage"
              className="hover:underline"
              onClick={(e) => handleNavClick(e, '/LocationOverviewPage', 'LocationOverviewPage')}
            >
              LocationOverviewPage
            </Link>
          </nav>
          <Bell className="w-6 h-6" />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SafeExplore. Stay safe, explore confidently.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;