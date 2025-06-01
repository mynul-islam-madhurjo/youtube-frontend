'use client'
import React from 'react'
import { MoreVertical } from 'lucide-react'
import { useVideos } from '@/hooks/useApi'
import { getVideoUrl, getAvatarUrl } from '@/lib/api'
import SafeImage from '@/components/common/SafeImage'

/**
 * Video Recommendations Component - Right sidebar with recommended videos
 * 
 * Displays a vertical list of recommended videos matching YouTube's layout:
 * - Thumbnail images from static folder
 * - Video metadata (title, channel, views, upload date)
 * - Channel avatars from static folder
 * - Proper spacing and hover effects
 */

export default function VideoRecommendations() {
  // Fetch recommended videos from API
  const { videos, loading, error } = useVideos({ limit: 9 })

  // Enhanced fallback data with proper paths
  const fallbackVideos = [
    {
      id: 1,
      thumbnail: '/thumbnails/video1.jpg',
      title: 'Post Job Offers For Free*',
      channel: { name: 'Indeed', verified: true, avatar: '/avatars/indeed.png' },
      views_display: '585K views',
      uploaded_display: '6 months ago',
      duration: '16:42'
    },
    {
      id: 2,
      thumbnail: '/thumbnails/video2.png',
      title: 'Top UI/UX Design Tips - How to Design a Great Bottom Mobile Navigation',
      channel: { name: 'uxpeak', verified: false, avatar: '/avatars/uxpeak.jpg' },
      views_display: '27K views',
      uploaded_display: '4 weeks ago',
      duration: '27K'
    },
    {
      id: 3,
      thumbnail: '/thumbnails/video3.jpg',
      title: 'This Video Will Take You From Junior to Senior UX/UI Designer',
      channel: { name: 'uxpeak', verified: false, avatar: '/avatars/uxpeak.jpg' },
      views_display: '190K views',
      uploaded_display: '6 months ago',
      duration: '16:42'
    },
    {
      id: 4,
      thumbnail: '/static/thumbnails/video4.jpg',
      title: 'The 8 UI/UX Cheat Codes for INSTANTLY Better Designs',
      channel: { name: 'Kole Jain', verified: false },
      views_display: '28K views',
      uploaded_display: '1 month ago',
      duration: '8:06'
    },
    {
      id: 5,
      thumbnail: '/static/thumbnails/video5.jpg',
      title: 'Top 5 UI/UI Design Tips and Tricks Everyone Needs to Know',
      channel: { name: 'uxpeak', verified: false },
      views_display: '60K views',
      uploaded_display: '9 months ago',
      duration: '7:01'
    },
    {
      id: 6,
      thumbnail: '/static/thumbnails/video6.jpg',
      title: 'Create a Design System with Figma - Full Course',
      channel: { name: 'freeCodeCamp.org', verified: true },
      views_display: '760K views',
      uploaded_display: '3 years ago',
      duration: '7:59'
    },
    {
      id: 7,
      thumbnail: '/static/thumbnails/video7.jpg',
      title: 'UX/UI Design Trends 2025',
      channel: { name: 'DesignSense', verified: true },
      views_display: '125K views',
      uploaded_display: '4 months ago',
      duration: '12:06'
    },
    {
      id: 8,
      thumbnail: '/static/thumbnails/video8.jpg',
      title: '4 levels of UI/UX design (and BIG mistakes to avoid)',
      channel: { name: 'Tim Gabe', verified: false },
      views_display: '123K views',
      uploaded_display: '1 month ago',
      duration: '15:34'
    },
    {
      id: 9,
      thumbnail: '/static/thumbnails/video9.jpg',
      title: 'Free Figma Crash Course for Beginners 2025 | UI/UX Design',
      channel: { name: 'Create a Design System', verified: true },
      views_display: '234K views',
      uploaded_display: '2 months ago',
      duration: '1:23:45'
    }
  ]

  const videosToShow = error ? fallbackVideos : videos

  return (
    <div className="p-2">
      {/* 
        Container with tighter padding:
        - p-2: CSS padding: 0.5rem; (8px - matches YouTube spacing)
      */}
      
      {loading && (
        <div className="space-y-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex mb-2 p-2 animate-pulse">
              <div className="w-40 h-24 bg-gray-200 rounded-lg mr-2"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!loading && videosToShow.map((video) => (
        <div 
          key={video.id} 
          className="flex mb-2 hover:bg-gray-50 rounded-lg p-2 cursor-pointer group transition-colors duration-200"
        >
          {/* Video Thumbnail with SafeImage */}
          <div className="relative flex-shrink-0 mr-2">
            <SafeImage
              src={getVideoUrl(video.thumbnail)}
              alt={video.title}
              type="video"
              className="w-40 h-24 object-cover rounded-lg"
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
              {video.channel.name}
              {video.channel.verified && ' ✓'}
            </p>
            
            {/* Video Stats */}
            <div className="flex items-center text-xs text-gray-600 space-x-1">
              <span>{video.views_display}</span>
              <span>•</span>
              <span>{video.uploaded_display}</span>
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