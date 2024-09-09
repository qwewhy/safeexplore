import React from "react";
import {
  Shield,
  Globe,
  Lock,
  CreditCard,
  AlertTriangle,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const SafetyTips = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SafeTravels</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
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

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Travel Safety Tips
        </h1>

        <p className="text-xl text-center mb-12">
          Stay safe on your adventures with these essential travel safety tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TipCard
            icon={<Globe className="w-12 h-12 text-blue-500" />}
            title="Research Your Destination"
            tips={[
              "Learn about local customs and laws",
              "Check travel advisories and health recommendations",
              "Understand the local emergency services system",
            ]}
          />
          <TipCard
            icon={<Lock className="w-12 h-12 text-green-500" />}
            title="Secure Your Belongings"
            tips={[
              "Use locks on your luggage",
              "Keep valuables in a hotel safe",
              "Be aware of your surroundings in crowded areas",
            ]}
          />
          <TipCard
            icon={<CreditCard className="w-12 h-12 text-purple-500" />}
            title="Protect Your Finances"
            tips={[
              "Inform your bank of your travel plans",
              "Carry multiple forms of payment",
              "Be cautious when using ATMs",
            ]}
          />
          <TipCard
            icon={<AlertTriangle className="w-12 h-12 text-yellow-500" />}
            title="Stay Alert"
            tips={[
              "Trust your instincts",
              "Avoid walking alone at night in unfamiliar areas",
              "Be cautious with new acquaintances",
            ]}
          />
          <TipCard
            icon={<Heart className="w-12 h-12 text-red-500" />}
            title="Health Precautions"
            tips={[
              "Get necessary vaccinations before your trip",
              "Pack a basic first-aid kit",
              "Stay hydrated and be cautious with street food",
            ]}
          />
          <TipCard
            icon={<Shield className="w-12 h-12 text-indigo-500" />}
            title="Digital Safety"
            tips={[
              "Use a VPN on public Wi-Fi",
              "Be careful what you share on social media",
              "Back up your important documents online",
            ]}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SafeTravels. Stay safe, explore confidently.</p>
        </div>
      </footer>
    </div>
  );
};

const TipCard = ({ icon, title, tips }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <ul className="list-disc pl-6">
        {tips.map((tip, index) => (
          <li key={index} className="mb-2">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
