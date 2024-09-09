import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MapPin,
  AlertTriangle,
  Camera,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  Share2,
} from "lucide-react";

import ForumPost from "./ForumPost";

// 城市背景渐变颜色
const cityColors = {
  Sydney: ["#87CEEB", "#1E90FF"], // 浅蓝到深蓝
  "New York": ["#FF6347", "#8B0000"], // 橙红到深红
  Beijing: ["#FFD700", "#FF4500"], // 金黄到橙红
  Tokyo: ["#FF69B4", "#8A2BE2"], // 粉红到紫色
};

// 城市数据 坛帖子与图片
const cityData = {
  Sydney: {
    forumPosts: [
      {
        title: "Best beaches in Sydney?",
        author: "BeachLover123",
        content:
          "I'm visiting Sydney next month and I'm looking for recommendations on the best beaches to visit. Any suggestions?",
        replies: 15,
        image: "/images/sydney-opera-house.jpg",
      },
      {
        title: "Sydney public transport tips",
        author: "TransitGuru",
        content:
          "For those new to Sydney, here are some tips for using public transport efficiently...",
        replies: 23,
      },
      {
        title: "Hidden gems in Sydney?",
        author: "ExplorerX",
        content:
          "I've been to Sydney a few times and I'm looking for some off-the-beaten-path attractions. Any recommendations?",
        replies: 31,
      },
      {
        title: "Best time to visit Sydney Opera House?",
        author: "OperaFan",
        content:
          "I want to visit the Sydney Opera House. When's the best time to go to avoid crowds?",
        replies: 19,
      },
      {
        title: "Sydney's food scene - must-try restaurants?",
        author: "FoodieTraveller",
        content:
          "I'm a big food enthusiast and I've heard Sydney has an amazing culinary scene. I'm looking for recommendations on must-try restaurants, from high-end dining to hole-in-the-wall gems. I'm particularly interested in places that showcase Australian cuisine or fusion dishes. Any specific dishes I shouldn't miss? Also, are there any food markets or festivals happening in the next couple of months?",
        replies: 42,
        image: "/images/sydney-seafood.jpg",
      },
      {
        title: "Day trips from Sydney",
        author: "AdventurousSpirit",
        content:
          "I'll be based in Sydney for two weeks and I'd love to explore the surrounding areas. What are some great day trips you'd recommend? I'm open to nature hikes, wine tasting, historical sites, or cute towns. I've heard about the Blue Mountains, but what else should I consider? Is it easy to do these trips by public transport or should I rent a car?",
        replies: 28,
      },
    ],
    attractions: [
      { name: "Sydney Opera House", checkIns: 152, rating: 4.8 },
      { name: "Bondi Beach", checkIns: 98, rating: 4.5 },
      { name: "Taronga Zoo", checkIns: 76, rating: 4.6 },
      { name: "Sydney Harbour Bridge", checkIns: 110, rating: 4.7 },
    ],
    risks: [
      {
        title: "Pickpocketing",
        level: "Low",
        description:
          "While pickpocketing can occur in crowded tourist areas, it's relatively uncommon in Sydney. Stay aware of your surroundings and keep valuables secure.",
      },
      {
        title: "Beach Safety",
        level: "Moderate",
        description:
          "Sydney's beaches can have strong currents. Always swim between the flags and follow lifeguard instructions.",
      },
      {
        title: "Sun Exposure",
        level: "High",
        description:
          "The Australian sun can be intense. Always use sunscreen, wear a hat, and stay hydrated, especially during summer months.",
      },
    ],
  },
  "New York": {
    forumPosts: [
      {
        title: "Must-visit NYC museums?",
        author: "ArtEnthusiast",
        content:
          "Planning a trip to New York and want to visit some museums. Which ones are absolute must-sees?",
        replies: 36,
      },
      {
        title: "Central Park activities",
        author: "NatureLover",
        content:
          "Spending a day in Central Park. What are some fun activities or spots I shouldn't miss?",
        replies: 29,
        image: "/images/new-york-skyline.jpg",
      },
      {
        title: "New York on a budget",
        author: "FrugalTraveler",
        content:
          "I'm planning a trip to New York but I'm on a tight budget. What are some tips for experiencing the city without breaking the bank? I'm looking for advice on affordable accommodations, cheap eats, and free or low-cost activities. Are there any good walking tours that don't cost much? Also, is it worth getting a city pass for attractions?",
        replies: 45,
      },
      {
        title: "Best NYC neighborhoods for foodies?",
        author: "CulinaryExplorer",
        content:
          "I'm a food lover planning a gastronomic adventure in New York. Which neighborhoods should I focus on for the best culinary experiences? I'm interested in everything from street food to fine dining. Any specific food tours you'd recommend? I'm also keen to try different cuisines - where can I find the best ethnic food districts?",
        replies: 38,
        image: "/images/nyc-food-market.jpg",
      },
      {
        title: "Broadway show recommendations",
        author: "TheatreAficionado",
        content:
          "I'm excited to see a Broadway show during my visit to New York. What are the must-see shows right now? I enjoy both musicals and plays. How far in advance should I book tickets? Are there any tips for getting discounted tickets? Also, are there any off-Broadway productions worth checking out?",
        replies: 33,
      },
    ],
    attractions: [
      { name: "Statue of Liberty", checkIns: 203, rating: 4.7 },
      { name: "Central Park", checkIns: 178, rating: 4.9 },
      { name: "Empire State Building", checkIns: 165, rating: 4.6 },
    ],
    risks: [
      {
        title: "Pickpocketing",
        level: "Moderate",
        description:
          "Be cautious in crowded tourist areas and on public transportation. Keep your belongings close and be aware of your surroundings.",
      },
      {
        title: "Traffic",
        level: "High",
        description:
          "New York traffic can be hectic. Always use crosswalks and obey traffic signals when walking.",
      },
    ],
  },
  Beijing: {
    forumPosts: [
      {
        title: "Great Wall sections to visit?",
        author: "HistoryBuff",
        content:
          "Which section of the Great Wall is best for a day trip from Beijing?",
        replies: 41,
        image: "/images/forbidden-city.jpg",
      },
      {
        title: "Beijing street food recommendations",
        author: "FoodieTraveler",
        content:
          "Looking to try some authentic Beijing street food. Any recommendations on what to try and where?",
        replies: 37,
      },
      {
        title: "Navigating Beijing's Subway",
        author: "MetroExplorer",
        content:
          "I'll be relying on public transport during my stay in Beijing. How user-friendly is the subway system for non-Chinese speakers? Are there any apps you'd recommend for navigation? Also, how crowded does it get during rush hour, and are there any etiquette rules I should be aware of?",
        replies: 25,
      },
      {
        title: "Traditional Chinese experiences in Beijing",
        author: "CultureEnthusiast",
        content:
          "I'm looking to immerse myself in traditional Chinese culture while in Beijing. Are there any particular temples, gardens, or historical sites you'd recommend? I'm also interested in activities like tai chi in the park, tea ceremonies, or calligraphy classes. Any suggestions on where to find authentic experiences that aren't too touristy?",
        replies: 33,
        image: "/images/beijing-hutong.jpg",
      },
      {
        title: "Day trips from Beijing",
        author: "WeekendWanderer",
        content:
          "I'll be in Beijing for a week and would like to take a day trip or two. Besides the Great Wall, what other destinations would you recommend? I'm interested in both natural scenery and historical sites. Is it easy to arrange these trips independently, or should I book through a tour company? Any specific tour operators you've had good experiences with?",
        replies: 29,
      },
    ],
    attractions: [
      { name: "Great Wall of China", checkIns: 245, rating: 4.9 },
      { name: "Forbidden City", checkIns: 189, rating: 4.7 },
      { name: "Temple of Heaven", checkIns: 132, rating: 4.6 },
    ],
    risks: [
      {
        title: "Air Quality",
        level: "Moderate",
        description:
          "Beijing can experience poor air quality. Check daily air quality reports and consider wearing a mask on high pollution days.",
      },
      {
        title: "Scams",
        level: "Moderate",
        description:
          "Be wary of 'tea ceremony' scams and unauthorized taxi services. Always use official taxis or ride-hailing apps.",
      },
    ],
  },
  Tokyo: {
    forumPosts: [
      {
        title: "Best time to see cherry blossoms?",
        author: "SakuraLover",
        content:
          "Planning a trip to Tokyo to see the cherry blossoms. When's the best time to visit?",
        replies: 52,
      },
      {
        title: "Navigating Tokyo's train system",
        author: "MetroExplorer",
        content:
          "Tokyo's train system seems complex. Any tips for a first-time visitor?",
        replies: 39,
      },
      {
        title: "Best districts for shopping in Tokyo?",
        author: "FashionistaExplorer",
        content:
          "I'm a shopping enthusiast and I've heard Tokyo is a retail paradise. Which districts should I focus on for the best shopping experiences? I'm interested in everything from high-end fashion to quirky souvenirs and electronics. Any specific department stores or markets I shouldn't miss? Also, are there any flea markets worth checking out for unique finds?",
        replies: 31,
        image: "/images/tokyo-shopping.jpg",
      },
      {
        title: "Unique dining experiences in Tokyo",
        author: "GourmetAdventurer",
        content:
          "I'm looking for unique dining experiences in Tokyo. I've heard about themed cafes, robot restaurants, and conveyor belt sushi. What are some must-try spots? I'm open to everything from high-end molecular gastronomy to local hole-in-the-wall places. Also, I'd love to try making my own sushi - are there any good sushi-making classes you'd recommend?",
        replies: 45,
      },
      {
        title: "Tokyo's best viewpoints",
        author: "CityScapePhotographer",
        content:
          "I'm a photography enthusiast looking for the best viewpoints to capture Tokyo's skyline. I've heard about the Tokyo Skytree and the Metropolitan Government Building, but are there any lesser-known spots that offer great views? I'm interested in both daytime and night shots. Also, are there any rooftop bars that combine great views with a nice atmosphere?",
        replies: 36,
        image: "/images/tokyo-skyline.jpg",
      },
    ],
    attractions: [
      { name: "Senso-ji Temple", checkIns: 167, rating: 4.7 },
      { name: "Tokyo Skytree", checkIns: 145, rating: 4.5 },
      { name: "Shibuya Crossing", checkIns: 198, rating: 4.6 },
    ],
    risks: [
      {
        title: "Earthquakes",
        level: "Moderate",
        description:
          "Japan is prone to earthquakes. Familiarize yourself with safety procedures in your accommodation.",
      },
      {
        title: "Rush Hour Crowds",
        level: "Moderate",
        description:
          "Tokyo's trains can get extremely crowded during rush hours. Consider avoiding travel during peak times if possible.",
      },
    ],
  },
};

const Community = () => {
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState("Sydney");
  const [expandedSection, setExpandedSection] = useState(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [backgroundColors, setBackgroundColors] = useState(
    cityColors[selectedCity]
  );

  useEffect(() => {
    setBackgroundOpacity(0);
    const timer = setTimeout(() => {
      setBackgroundColors(cityColors[selectedCity]);
      setBackgroundOpacity(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCity]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      alert("This page is home page");
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: `linear-gradient(to bottom, ${backgroundColors[0]}, ${backgroundColors[1]})`,
          opacity: backgroundOpacity,
        }}
      ></div>

      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* 内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 导航栏 */}
        <nav className="bg-blue-600 bg-opacity-75 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">SafeTravels</h1>
            <div className="space-x-4">
              <Link
                to="/"
                className="hover:underline"
                onClick={handleHomeClick}
              >
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

        {/* 主要内容 */}
        <main className="flex-grow container mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Travel Community
          </h1>

          {/* 城市选择器 */}
          <div className="mb-8">
            <label
              htmlFor="city-select"
              className="block text-sm font-medium text-white mb-2"
            >
              Select a city:
            </label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {Object.keys(cityData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-3xl font-semibold mb-6 text-white">
            {selectedCity} Community
          </h2>

          {/* 社区部分 */}
          <div className="space-y-6">
            {/* 讨论论坛 */}
            <CommunitySection
              title="Discussion Forum"
              icon={<MessageSquare className="w-6 h-6" />}
              expanded={expandedSection === "forum"}
              onToggle={() => toggleSection("forum")}
            >
              <div className="space-y-6">
                {cityData[selectedCity].forumPosts.map((post, index) => (
                  <ForumPost
                    key={index}
                    title={post.title}
                    author={post.author}
                    content={post.content}
                    replies={post.replies}
                    image={post.image}
                  />
                ))}
              </div>
            </CommunitySection>

            {/* 景点打卡 */}
            <CommunitySection
              title="Attraction Check-ins"
              icon={<Camera className="w-6 h-6" />}
              expanded={expandedSection === "checkins"}
              onToggle={() => toggleSection("checkins")}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cityData[selectedCity].attractions.map((attraction, index) => (
                  <AttractionCard
                    key={index}
                    name={attraction.name}
                    checkIns={attraction.checkIns}
                    rating={attraction.rating}
                  />
                ))}
              </div>
            </CommunitySection>

            {/* 风险指南 */}
            <CommunitySection
              title={`${selectedCity} Risk Guide`}
              icon={<AlertTriangle className="w-6 h-6" />}
              expanded={expandedSection === "riskguide"}
              onToggle={() => toggleSection("riskguide")}
            >
              <div className="space-y-4">
                {cityData[selectedCity].risks.map((risk, index) => (
                  <RiskItem
                    key={index}
                    title={risk.title}
                    level={risk.level}
                    description={risk.description}
                  />
                ))}
              </div>
            </CommunitySection>
          </div>
        </main>

        {/* 页脚 */}
        <footer className="bg-blue-600 bg-opacity-75 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 SafeTravels. Stay safe, explore confidently.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// 社区部分组件：可折叠的部分
const CommunitySection = ({ title, icon, children, expanded, onToggle }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div
      className="flex items-center justify-between p-4 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {expanded ? (
        <ChevronUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </div>
    {expanded && <div className="p-4 border-t">{children}</div>}
  </div>
);

// 论坛帖子组件


// 景点卡片组件
const AttractionCard = ({ name, checkIns, rating }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
    <MapPin className="w-8 h-8 text-blue-500" />
    <div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{checkIns} check-ins</p>
      <p className="text-sm text-yellow-500">★ {rating}</p>
    </div>
  </div>
);

// 风险项目组件
const RiskItem = ({ title, level, description }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <h4 className="font-semibold">{title}</h4>
      <span
        className={`px-2 py-1 rounded text-sm ${
          level === "Low"
            ? "bg-green-100 text-green-800"
            : level === "Moderate"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {level} Risk
      </span>
    </div>
    <p className="mt-2 text-sm">{description}</p>
  </div>
);

export default Community;
