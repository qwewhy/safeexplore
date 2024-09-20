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
  PlusCircle,
  Umbrella,
  Bus,
  Utensils,
} from "lucide-react";
import ForumPost from "./ForumPost";
import Layout from './Layout';



const Community = () => {
  const location = useLocation();
  const [selectedCity, setSelectedCity] = useState("Sydney");
  const [expandedSection, setExpandedSection] = useState(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [cityColors, setCityColors] = useState({});
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCityData();
  }, []);

  useEffect(() => {
    if (cityData[selectedCity] && cityColors[selectedCity]) {
      setBackgroundOpacity(0);
      const timer = setTimeout(() => {
        setBackgroundColors(cityColors[selectedCity]);
        setBackgroundOpacity(1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedCity, cityData, cityColors]);

  const fetchCityData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/cities');
      const data = await response.json();
      if (data.cityData && data.cityColors) {
        setCityData(data.cityData);
        setCityColors(data.cityColors);
        setBackgroundColors(data.cityColors[selectedCity] || []);
      } else {
        console.error('Invalid data structure received from server');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching city data:', error);
      setLoading(false);
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      alert("This page is home page");
    }
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    if (cityColors[newCity]) {
      setBackgroundColors(cityColors[newCity]);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50 relative">
      {/* 背景渐变 */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: `linear-gradient(to bottom, ${backgroundColors[0]}, ${backgroundColors[1]})`,
          opacity: backgroundOpacity,
        }}
      ></div>

      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* 内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 主要内容 */}
        <main className="flex-grow container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Travel Community
          </h1>

          {loading ? (
            <p className="text-white text-center text-xl">Loading city data...</p>
          ) : Object.keys(cityData).length > 0 ? (
            <>
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
                  onChange={handleCityChange}
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
                    {/* 标题和发布新帖子按钮的容器 */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Posts</h3>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
                        <PlusCircle className="mr-2" />
                        Create New Post
                      </button>
                    </div>

                    {/* 帖子列表 */}
                    {cityData[selectedCity]?.forumPosts?.map((post, index) => (
                      <ForumPost
                        key={index}
                        title={post.title}
                        author={post.author}
                        content={post.content}
                        replies={post.replies}
                        image={post.image}
                        icon={getPostIcon(post.title)}
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
                    {cityData[selectedCity]?.attractions?.map((attraction, index) => (
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
                    {cityData[selectedCity]?.risks?.map((risk, index) => (
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
            </>
          ) : (
            <p className="text-white text-center text-xl">No city data available.</p>
          )}
        </main>
      </div>
    </div>
  );
};

// 社区部分组件：可折叠的部分
const CommunitySection = ({ title, icon, children, expanded, onToggle }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div
      className="flex items-center justify-between p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-300"
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

// 根据帖子标题选择图标
const getPostIcon = (title) => {
  if (title.toLowerCase().includes("beach"))
    return <Umbrella className="w-5 h-5" />;
  if (title.toLowerCase().includes("transport"))
    return <Bus className="w-5 h-5" />;
  if (
    title.toLowerCase().includes("food") ||
    title.toLowerCase().includes("restaurant")
  )
    return <Utensils className="w-5 h-5" />;
  return <MessageSquare className="w-5 h-5" />;
};

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
