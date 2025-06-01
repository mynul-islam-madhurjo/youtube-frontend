'use client';

import React from 'react'
import CategoryChips from '@/components/video/CategoryChips'
import VideoRecommendations from '@/components/video/VideoRecommendations'
import VideoPlayer from '@/components/video/VideoPlayer'
import VideoDetails from '@/components/video/VideoDetails'

export default function MainContent() {
  return (
    <main className="flex-1 bg-white h-screen overflow-hidden">
      <div className="flex h-full max-w-screen-2xl mx-auto">
        
        {/* Left Side - Main Video Player and Details */}
        <div className="flex-1 min-w-0 overflow-y-auto scrollbar-hide">
          
          {/* Video Player Section */}
          <div className="px-6 pt-4">
            <VideoPlayer />
          </div>
          
          {/* Video Details (includes comments section) */}
          <VideoDetails />
          
        </div>
        
        {/* Right Side - Recommended Videos */}
        <div className="w-96 flex-shrink-0 bg-white overflow-hidden">
          
          {/* Category Filter Chips */}
          <div className="p-4 border-b border-gray-100">
            <CategoryChips />
          </div>
          
          {/* Recommended Videos List */}
          <div className="h-full overflow-y-auto scrollbar-hide">
            <VideoRecommendations />
          </div>
        </div>
      </div>
    </main>
  );
}