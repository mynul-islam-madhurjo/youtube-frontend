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

/**
 * Video Details Component - Pixel-perfect YouTube video details section
 * 
 * Matches YouTube's exact layout:
 * - Proper spacing and typography
 * - Correct button positioning
 * - Accurate channel info layout
 */
export default function VideoDetails() {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="px-6 py-4">
      {/* 
        Main container with YouTube spacing:
        - px-6: CSS padding-left: 1.5rem; padding-right: 1.5rem; (24px horizontal)
        - py-4: CSS padding-top: 1rem; padding-bottom: 1rem; (16px vertical)
      */}
      
      {/* Video Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-2 leading-tight pr-4">
        Top 5 UX/UI Design Tips and Tricks Every Designer Needs to Know About, part 1
      </h1>
      {/* 
        Title with YouTube styling:
        - text-xl: CSS font-size: 1.25rem; (20px - YouTube's title size)
        - font-semibold: CSS font-weight: 600;
        - text-gray-900: Dark text
        - mb-2: CSS margin-bottom: 0.5rem; (8px)
        - leading-tight: Tight line height
        - pr-4: Right padding for spacing
      */}
      
      {/* Video Meta and Actions Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Left: Video Stats */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>229K views</span>
          <span>•</span>
          <span>10 months ago</span>
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
              <span className="text-sm">10K</span>
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
          {/* Channel Avatar */}
          <img
            src="/static/avatars/uxpeak.jpg"
            alt="uxpeak avatar"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            onError={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              e.target.style.display = 'flex'
              e.target.style.alignItems = 'center'
              e.target.style.justifyContent = 'center'
              e.target.style.color = 'white'
              e.target.style.fontSize = '14px'
              e.target.style.fontWeight = '600'
              e.target.textContent = 'U'
            }}
          />
          
          {/* Channel Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-gray-900 text-sm">uxpeak</h3>
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">67.5K subscribers</p>
          </div>
        </div>
        
        {/* Right: Subscribe Button */}
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium ml-4 flex-shrink-0">
          Subscribe
        </Button>
      </div>
      
      {/* Hashtags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#figma</span>
        <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#uxdesign</span>
        <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">#uidesign</span>
      </div>
      
      {/* Video Description */}
      <div className="bg-gray-100 rounded-xl p-3">
        <div className="text-sm text-gray-900 space-y-2">
          <p className="font-medium">
            Get the UI/UX Playbook here: https://www.uxpeak.com/the-ui-ux-play...
          </p>
          <p className="text-gray-700">
            🔗 Use exclusive discount code 'VIP60' to get 60% off. Limited time only! ...more
          </p>
        </div>
        
        <button className="text-sm font-semibold text-gray-900 mt-2 hover:text-gray-700">
          Show more
        </button>
      </div>
    </div>
  )
}