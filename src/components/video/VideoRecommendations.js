'use client'
import React from 'react'
import { MoreVertical } from 'lucide-react'

/**
 * Video Recommendations Component - Right sidebar with recommended videos
 * 
 * Displays a vertical list of recommended videos matching YouTube's layout:
 * - Thumbnail images from static folder
 * - Video metadata (title, channel, views, upload date)
 * - Channel avatars from static folder
 * - Proper spacing and hover effects
 */

// Mock data using actual images from static folder
const recommendedVideos = [
  {
    id: 1,
    thumbnail: '/static/thumbnails/video1.jpg',
    title: 'Post Job Offers For Free*',
    channel: 'Indeed ✓',
    channelAvatar: '/static/avatars/indeed.png',
    views: '585K views',
    uploadTime: '6 months ago',
    duration: '16:42'
  },
  {
    id: 2,
    thumbnail: '/static/thumbnails/video2.png',
    title: 'Top UI/UX Design Tips - How to Design a Great Bottom Mobile Navigation',
    channel: 'uxpeak',
    channelAvatar: '/static/avatars/uxpeak.jpg',
    views: '27K views',
    uploadTime: '4 weeks ago',
    duration: '27K'
  },
  {
    id: 3,
    thumbnail: '/static/thumbnails/video3.jpg',
    title: 'This Video Will Take You From Junior to Senior UX/UI Designer',
    channel: 'uxpeak',
    channelAvatar: '/static/avatars/uxpeak.jpg',
    views: '190K views',
    uploadTime: '6 months ago',
    duration: '16:42'
  },
  {
    id: 4,
    thumbnail: '/static/thumbnails/video4.jpg',
    title: 'The 8 UI/UX Cheat Codes for INSTANTLY Better Designs',
    channel: 'Kole Jain',
    channelAvatar: '/static/avatars/kole.jpg',
    views: '28K views',
    uploadTime: '1 month ago',
    duration: '8:06'
  },
  {
    id: 5,
    thumbnail: '/static/thumbnails/video5.jpg',
    title: 'Top 5 UI/UI Design Tips and Tricks Everyone Needs to Know',
    channel: 'uxpeak',
    channelAvatar: '/static/avatars/uxpeak.jpg',
    views: '60K views',
    uploadTime: '9 months ago',
    duration: '7:01'
  },
  {
    id: 6,
    thumbnail: '/static/thumbnails/video6.jpg',
    title: 'Create a Design System with Figma - Full Course',
    channel: 'freeCodeCamp.org ✓',
    channelAvatar: '/static/avatars/freecodecamp.jpg',
    views: '760K views',
    uploadTime: '3 years ago',
    duration: '7:59'
  },
  {
    id: 7,
    thumbnail: '/static/thumbnails/video7.jpg',
    title: 'UX/UI Design Trends 2025',
    channel: 'DesignSense ✓',
    channelAvatar: '/static/avatars/designsense.png',
    views: '125K views',
    uploadTime: '4 months ago',
    duration: '12:06'
  },
  {
    id: 8,
    thumbnail: '/static/thumbnails/video8.jpg',
    title: '4 levels of UI/UX design (and BIG mistakes to avoid)',
    channel: 'Tim Gabe',
    channelAvatar: '/static/avatars/timgabe.jpg',
    views: '123K views',
    uploadTime: '1 month ago',
    duration: '15:34'
  },
  {
    id: 9,
    thumbnail: '/static/thumbnails/video9.jpg',
    title: 'Free Figma Crash Course for Beginners 2025 | UI/UX Design',
    channel: 'Create a Design System',
    channelAvatar: '/static/avatars/figma.png',
    views: '234K views',
    uploadTime: '2 months ago',
    duration: '1:23:45'
  }
];

export default function VideoRecommendations() {
  return (
    <div className="p-2">
      {/* 
        Container with tighter padding:
        - p-2: CSS padding: 0.5rem; (8px - matches YouTube spacing)
      */}
      
      {recommendedVideos.map((video) => (
        <div 
          key={video.id} 
          className="flex mb-2 hover:bg-gray-50 rounded-lg p-2 cursor-pointer group transition-colors duration-200"
        >
          {/* Video Thumbnail */}
          <div className="relative flex-shrink-0 mr-2">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-40 h-24 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                e.target.style.display = 'flex'
                e.target.style.alignItems = 'center'
                e.target.style.justifyContent = 'center'
                e.target.style.color = 'white'
                e.target.style.fontSize = '12px'
                e.target.textContent = 'Video'
              }}
            />
            
            {/* Duration Badge */}
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-90 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              {video.duration}
            </div>
          </div>
          
          {/* Video Info */}
          <div className="flex-1 min-w-0">
            {/* Video Title */}
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 leading-snug group-hover:text-blue-600 transition-colors">
              {video.title}
            </h3>
            
            {/* Channel Name */}
            <p className="text-xs text-gray-600 mb-1 hover:text-gray-900 cursor-pointer">
              {video.channel}
            </p>
            
            {/* Video Stats */}
            <div className="flex items-center text-xs text-gray-600 space-x-1">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.uploadTime}</span>
            </div>
          </div>
          
          {/* More Options Button */}
          <div className="flex-shrink-0 ml-1">
            <button className="p-1 rounded-full hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}