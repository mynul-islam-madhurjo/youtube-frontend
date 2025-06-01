'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Download, 
  Bookmark,
  MoreHorizontal 
} from 'lucide-react'
import { useVideoDetails } from '@/hooks/useApi'
import { getStaticUrl, getAvatarUrl } from '@/lib/api'
import SafeImage from '@/components/common/SafeImage'

/**
 * Video Details Component - With proper image handling
 */
export default function VideoDetails({ videoId = 33 }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  
  // Fetch video details from API
  const { video, loading, error } = useVideoDetails(videoId)

  if (loading) {
    return (
      <div className="px-6 py-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    )
  }

  if (error || !video) {
    // Fallback to original static content if API fails
    return (
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900 mb-2 leading-tight pr-4">
          Top 5 UX/UI Design Tips and Tricks Every Designer Needs to Know About, part 1
        </h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>229K views</span>
            <span>•</span>
            <span>10 months ago</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center bg-gray-100 rounded-full">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-l-full rounded-r-none px-4 py-2 h-9 ${isLiked ? 'text-blue-600' : 'text-gray-700'} hover:bg-gray-200`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                <span className="text-sm">10K</span>
              </Button>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-r-full rounded-l-none px-4 py-2 h-9 ${isDisliked ? 'text-blue-600' : 'text-gray-700'} hover:bg-gray-200`}
                onClick={() => setIsDisliked(!isDisliked)}
              >
                <ThumbsDown className="w-4 h-4" />
              </Button>
            </div>
            
            <Button variant="ghost" size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-2 h-9">
              <Share className="w-4 h-4 mr-2" />
              <span className="text-sm">Share</span>
            </Button>
          </div>
        </div>
        
        <div className="flex items-start justify-between py-3">
          <div className="flex items-start space-x-3 flex-1">
            <SafeImage
              src={getAvatarUrl('/avatars/uxpeak.jpg', 'uxpeak')}
              alt="uxpeak avatar"
              type="avatar"
              fallbackText="U"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-gray-900 text-sm">uxpeak</h3>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">67.5K subscribers</p>
            </div>
          </div>
          
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium ml-4 flex-shrink-0">
            Subscribe
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 py-4">
      {/* Video Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-2 leading-tight pr-4">
        {video.title}
      </h1>
      
      {/* Video Meta and Actions Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Left: Video Stats */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{video.views_display}</span>
          <span>•</span>
          <span>{video.uploaded_display}</span>
        </div>
        
        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-1">
          {/* Like/Dislike Group */}
          <div className="flex items-center bg-gray-100 rounded-full">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-l-full rounded-r-none px-4 py-2 h-9 ${isLiked ? 'text-blue-600' : 'text-gray-700'} hover:bg-gray-200`}
              onClick={() => {
                setIsLiked(!isLiked)
                if (isLiked) setIsDisliked(false)
              }}
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              <span className="text-sm">{video.likes > 1000 ? `${Math.floor(video.likes/1000)}K` : video.likes}</span>
            </Button>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-r-full rounded-l-none px-4 py-2 h-9 ${isDisliked ? 'text-blue-600' : 'text-gray-700'} hover:bg-gray-200`}
              onClick={() => {
                setIsDisliked(!isDisliked)
                if (isDisliked) setIsLiked(false)
              }}
            >
              <ThumbsDown className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Share Button */}
          <Button variant="ghost" size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-2 h-9">
            <Share className="w-4 h-4 mr-2" />
            <span className="text-sm">Share</span>
          </Button>
          
          {/* Download Button */}
          <Button variant="ghost" size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-2 h-9">
            <Download className="w-4 h-4 mr-2" />
            <span className="text-sm">Download</span>
          </Button>
          
          {/* Save Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 h-9 ${isSaved ? 'text-blue-600' : 'text-gray-700'}`}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark className="w-4 h-4 mr-2" />
            <span className="text-sm">Save</span>
          </Button>
          
          {/* More Options */}
          <Button variant="ghost" size="sm" className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 h-9 w-9">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Channel Info and Subscribe Row */}
      <div className="flex items-start justify-between py-3">
        {/* Left: Channel Info */}
        <div className="flex items-start space-x-3 flex-1">
          {/* Channel Avatar with SafeImage */}
          <SafeImage
            src={getAvatarUrl(video.channel.avatar, video.channel.name)}
            alt={`${video.channel.name} avatar`}
            type="avatar"
            fallbackText={video.channel.name.charAt(0)}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          
          {/* Channel Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-gray-900 text-sm">{video.channel.name}</h3>
              {video.channel.verified && (
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-0.5">{video.channel.subscribers_display} subscribers</p>
          </div>
        </div>
        
        {/* Right: Subscribe Button */}
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium ml-4 flex-shrink-0">
          Subscribe
        </Button>
      </div>
      
      {/* Video Description */}
      <div className="bg-gray-100 rounded-xl p-3">
        <div className="text-sm text-gray-900 space-y-2">
          <p className="text-gray-700">
            {video.description}
          </p>
        </div>
        
        <button className="text-sm font-semibold text-gray-900 mt-2 hover:text-gray-700">
          Show more
        </button>
      </div>
    </div>
  )
}