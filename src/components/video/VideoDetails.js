'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
  Bookmark,
  MoreHorizontal,
  Scissors
} from 'lucide-react';
import { useVideoDetails } from '@/hooks/useApi';
import { getAvatarUrl } from '@/lib/api';
import SafeImage from '@/components/common/SafeImage';

export default function VideoDetails({ videoId = 33 }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const { video, loading, error } = useVideoDetails(videoId);

  if (loading) {
    return (
      <div className="px-6 py-4 animate-pulse bg-white">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="h-9 bg-gray-200 rounded-full w-20 ml-4"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-full w-40"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 ml-[52px]"></div>
      </div>
    );
  }

  // Video data (with fallback)
  const videoData = video || {
    title: "Top 5 UX/UI Design Tips and Tricks Every Designer Needs to Know About, part 1",
    views_display: "229K views",
    uploaded_display: "10 months ago",
    likes: 10000,
    description: "Get the UI/UX Playbook here: https://www.uxpeak.com/the-ui-ux-play... #figma #uxdesign #uidesign",
    channel: {
      name: "uxpeak",
      subscribers_display: "67.5K subscribers",
      avatar: "/avatars/uxpeak.jpg"
    }
  };

  return (
    <div className="bg-white">
      <div className="px-4 sm:px-6 py-2 sm:py-3">
        {/* 1. VIDEO TITLE - Reduced margin */}
        <h1 className="text-[20px] leading-[26px] font-semibold text-gray-900 mb-2 sm:mb-3">
          {videoData.title}
        </h1>

        {/* 2. MAIN ROW: Channel Info + Subscribe + Action Buttons - Reduced margin */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 space-y-2 sm:space-y-0">
          
          {/* LEFT SIDE: Channel Avatar + Name + Subscribe Button */}
          <div className="flex items-center space-x-3">
            {/* Channel Avatar - Smaller on mobile */}
            <SafeImage
              src={getAvatarUrl(videoData.channel.avatar, videoData.channel.name)}
              alt={`${videoData.channel.name} avatar`}
              type="avatar"
              fallbackText={videoData.channel.name.charAt(0).toUpperCase()}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
            />
            
            {/* Channel Name + Info */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-[14px] text-gray-900 leading-tight">
                  {videoData.channel.name}
                </h3>
                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[12px] text-gray-600 leading-tight">
                {videoData.channel.subscribers_display}
              </p>
            </div>

            {/* Subscribe Button - Compact */}
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-3 sm:px-4 py-1 text-[14px] font-medium h-8 sm:h-9 ml-3 sm:ml-4">
              Subscribe
            </Button>
          </div>

          {/* RIGHT SIDE: Action Buttons - More compact */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide">
            
            {/* Like/Dislike Combined Button - Compact */}
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9 hover:bg-gray-200 ${
                  isLiked ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsLiked(!isLiked);
                  if (isLiked) setIsDisliked(false);
                }}
              >
                <ThumbsUp className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="text-sm font-medium">
                  {videoData.likes > 1000 ? `${Math.floor(videoData.likes / 1000)}K` : videoData.likes}
                </span>
              </Button>
              
              <div className="w-px h-5 sm:h-6 bg-gray-300"></div>
              
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9 hover:bg-gray-200 ${
                  isDisliked ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsDisliked(!isDisliked);
                  if (isDisliked) setIsLiked(false);
                }}
              >
                <ThumbsDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Share Button - Compact */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9 flex-shrink-0"
            >
              <Share className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="text-sm font-medium hidden sm:inline">Share</span>
            </Button>

            {/* Download Button - Compact */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9 flex-shrink-0"
            >
              <Download className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="text-sm font-medium hidden sm:inline">Download</span>
            </Button>

            {/* More Options - Compact */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 p-1.5 sm:p-2 h-8 sm:h-9 w-8 sm:w-9 flex-shrink-0"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 4. DESCRIPTION SECTION - Reduced padding and margin */}
        <div className="bg-gray-100 rounded-xl p-2 sm:p-3 mb-3 sm:mb-4">
          <div className="flex items-center text-[14px] text-gray-900 font-medium mb-1 sm:mb-2">
            <span>{videoData.views_display}</span>
            <span className="mx-2">•</span>
            <span>{videoData.uploaded_display}</span>
            <span className="ml-4 text-blue-600 cursor-pointer hover:underline">#figma</span>
            <span className="ml-2 text-blue-600 cursor-pointer hover:underline">#uxdesign</span>
            <span className="ml-2 text-blue-600 cursor-pointer hover:underline">#uidesign</span>
          </div>
          
          <div className="text-[14px] text-gray-900 leading-[20px]">
            <span>Get the UI/UX Playbook here: </span>
            <span className="text-blue-600 cursor-pointer hover:underline">
              https://www.uxpeak.com/the-ui-ux-play...
            </span>
            
            {!showFullDescription && (
              <button 
                className="ml-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setShowFullDescription(true)}
              >
                ...more
              </button>
            )}
          </div>
        </div>

        {/* 5. COMMENTS SECTION - Compact header */}
        <div className="border-t border-gray-100 pt-3 sm:pt-4">
          <div className="flex items-center justify-start space-x-4 mb-3 sm:mb-4">
            <span className="text-[16px] font-semibold text-gray-900">196 Comments</span>
            <button className="flex items-center space-x-1 text-[14px] font-medium text-gray-700 hover:text-gray-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span>Sort by</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}