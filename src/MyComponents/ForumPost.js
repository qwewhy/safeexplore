import React, { useState } from 'react';
import { ThumbsUp, Share2 } from 'lucide-react';

const ForumPost = ({ title, author, content, replies, image }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg border border-gray-200 shadow-sm mb-4">
      <h4 className="font-semibold text-lg text-blue-600">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">Posted by {author}</p>
      <p className="mt-2 text-gray-800">{content}</p>
      {image && (
        <div className="mt-4 max-w-md mx-auto">
          <img 
            src={image} 
            alt={title} 
            className="rounded-lg w-full h-auto object-cover max-h-40" 
          />
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLikes(likes + 1)}
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
          >
            <ThumbsUp size={18} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>
        <p className="text-sm text-blue-600">{replies} replies</p>
      </div>
    </div>
  );
};

export default ForumPost;