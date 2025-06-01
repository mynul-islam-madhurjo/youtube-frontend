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
      <div className="px-6 py-3">
        {/* 1. VIDEO TITLE - 20px font, bold, 16px bottom margin */}
        <h1 className="text-[20px] leading-[26px] font-semibold text-gray-900 mb-4">
          {videoData.title}
        </h1>

        {/* 2. MAIN ROW: Channel Info + Subscribe + Action Buttons */}
        <div className="flex items-center justify-between mb-3">
          
          {/* LEFT SIDE: Channel Avatar + Name + Subscribe Button */}
          <div className="flex items-center space-x-3">
            {/* Channel Avatar (40x40px) */}
            <SafeImage
              src={getAvatarUrl(videoData.channel.avatar, videoData.channel.name)}
              alt={`${videoData.channel.name} avatar`}
              type="avatar"
              fallbackText={videoData.channel.name.charAt(0).toUpperCase()}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            
            {/* Channel Name + Verified + Subscribers */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-[14px] text-gray-900 leading-tight">
                  {videoData.channel.name}
                </h3>
                {/* Verified checkmark */}
                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[12px] text-gray-600 leading-tight">
                {videoData.channel.subscribers_display}
              </p>
            </div>

            {/* Subscribe Button - RIGHT NEXT TO CHANNEL INFO */}
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-4 py-1 text-[14px] font-medium h-9 ml-4">
              Subscribe
            </Button>
          </div>

          {/* RIGHT SIDE: Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Like/Dislike Combined Button */}
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none px-3 py-2 h-9 hover:bg-gray-200 ${
                  isLiked ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsLiked(!isLiked);
                  if (isLiked) setIsDisliked(false);
                }}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {videoData.likes > 1000 ? `${Math.floor(videoData.likes / 1000)}K` : videoData.likes}
                </span>
              </Button>
              
              {/* Divider */}
              <div className="w-px h-6 bg-gray-300"></div>
              
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none px-3 py-2 h-9 hover:bg-gray-200 ${
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

            {/* Share Button */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 h-9"
            >
              <Share className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Share</span>
            </Button>

            {/* Download Button */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 h-9"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Download</span>
            </Button>

            {/* Clip Button */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 h-9"
            >
              <Scissors className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Clip</span>
            </Button>

            {/* Save Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-2 h-9 ${
                isSaved ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Bookmark className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Save</span>
            </Button>

            

            {/* More Options */}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 h-9 w-9"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>


        {/* 4. DESCRIPTION SECTION */}
        <div className="bg-gray-100 rounded-xl p-3 mb-6">
          <div className="flex items-center text-[14px] text-gray-900 font-medium mb-2">
            <span>{videoData.views_display}</span>
            <span className="mx-2">•</span>
            <span>{videoData.uploaded_display}</span>
            <span className="ml-4 text-gray-600 cursor-pointer hover:underline">#figma</span>
            <span className="ml-2 text-gray-600 cursor-pointer hover:underline">#uxdesign</span>
            <span className="ml-2 text-gray-600 cursor-pointer hover:underline">#uidesign</span>
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
            
            {showFullDescription && (
              <>
                <br /><br />
                <div className="text-gray-700">
                  <p>🔥 Use exclusive discount code 'VIP60' to get 60% off. Limited time only! 🔥</p>
                </div>
                <button 
                  className="mt-2 text-gray-700 hover:text-gray-900 font-medium block"
                  onClick={() => setShowFullDescription(false)}
                >
                  Show less
                </button>
              </>
            )}
          </div>
        </div>

        {/* 5. COMMENTS SECTION */}
        <div className="mt-6">
          {/* Comments Header - "196 Comments" and "Sort by" side by side on the left */}
          <div className="flex items-center mb-6">
            <h2 className="text-[20px] font-medium text-gray-900 mr-6">
              196 Comments
            </h2>
            <button className="flex items-center text-[14px] text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h6v-2H3v2zm0-5h12v-2H3v2zm0-5h18V6H3v2z" />
              </svg>
              <span className="font-medium">Sort by</span>
            </button>
          </div>

          {/* Add Comment Input */}
          <div className="flex items-start space-x-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-[14px] flex-shrink-0">
              M
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full text-[14px] text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none pb-2 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}