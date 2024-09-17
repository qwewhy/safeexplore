import React, { useState } from 'react';
import { MapPin, ChevronUp, ChevronDown, Star, ThumbsUp, ThumbsDown, BookmarkPlus, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // 使用环境变量
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: -33.8688, // Sydney's latitude
    lng: 151.2093  // Sydney's longitude
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

const LocationOverviewPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Airport');
  const [isPanelMaximized, setIsPanelMaximized] = useState(false);

  const categories = ['Airport', 'Hotel', 'Restaurant', 'Attraction'];
  const reviews = [
    { id: 1, user: 'John Doe', rating: 4, content: 'Great place! Loved the atmosphere. The staff was very friendly and accommodating. I would definitely recommend this location to anyone visiting the area.' },
    { id: 2, user: 'Jane Smith', rating: 5, content: 'Excellent service and beautiful views. The amenities were top-notch and the location was perfect for exploring the city. I couldn\'t have asked for a better experience.' },
    { id: 3, user: 'Bob Johnson', rating: 3, content: 'Decent place, but a bit overpriced. While the location was convenient, I felt that the value for money could have been better. The facilities were good, but not exceptional.' },
    { id: 4, user: 'Alice Brown', rating: 4, content: 'A lovely spot with great potential. The ambiance was wonderful and the location was ideal. A few minor improvements could make this place truly outstanding.' },
    { id: 5, user: 'Charlie Wilson', rating: 5, content: 'Absolutely fantastic! From the moment I arrived, I was impressed by the attention to detail and the high level of service. This place exceeded all my expectations.' },
    { id: 6, user: 'Diana Taylor', rating: 4, content: 'Very enjoyable stay. The location was perfect for my needs and the staff was incredibly helpful. I appreciated the clean and well-maintained facilities.' },
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Location Overview</h1>
        
        {/* Google Map */}
        <div className="h-96 mb-4 rounded-lg overflow-hidden">
          <MapComponent />
        </div>
        
        {/* Category icons */}
        <div className="flex justify-between mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`p-2 rounded-full ${selectedCategory === category ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}
              onClick={() => setSelectedCategory(category)}
            >
              <MapPin size={24} />
            </button>
          ))}
        </div>
        
        {/* Reviews panel */}
        <div className={`bg-white text-gray-800 rounded-lg shadow-lg ${isPanelMaximized ? 'h-[32rem]' : 'h-96'} overflow-hidden transition-all duration-300`}>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">User Review</h2>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <Star size={20} />
              <BookmarkPlus size={20} />
              <ThumbsUp size={20} />
              <ThumbsDown size={20} />
              <Filter size={20} />
            </div>
          </div>
          <div className="p-4 overflow-y-auto h-full">
            {reviews.map((review) => (
              <div key={review.id} className="mb-4 p-2 border-b flex">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full mr-4 flex-shrink-0 flex items-center justify-center font-bold">
                  {getInitials(review.user)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <Link to={`/user/${review.user}`} className="font-semibold mr-2">{review.user}</Link>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < review.rating ? 'gold' : 'none'} stroke={i < review.rating ? 'gold' : 'currentColor'} />
                      ))}
                    </div>
                  </div>
                  <p>{review.content}</p>
                  <button className="text-blue-500 mt-2">Read more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationOverviewPage;