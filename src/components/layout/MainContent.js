'use client';

import React, { useState } from 'react'
import CategoryChips from '@/components/video/CategoryChips'
import VideoRecommendations from '@/components/video/VideoRecommendations'
import VideoPlayer from '@/components/video/VideoPlayer'
import VideoDetails from '@/components/video/VideoDetails'

export default function MainContent() {
  const [activeCategory, setActiveCategory] = useState('all-content');

  const handleCategoryChange = (categorySlug, categoryType) => {
    setActiveCategory(categorySlug);
    console.log('Category changed:', categorySlug, categoryType);
  };

  return (
    <main className="w-full bg-white min-h-screen">
      {/* Mobile/Tablet: Single column layout */}
      <div className="lg:hidden">
        {/* Video Player Section - Minimal padding */}
        <div className="px-2 sm:px-3 pt-2">
          <VideoPlayer />
        </div>
        
        {/* Video Details */}
        <VideoDetails />
        
        {/* Category Filter Chips - Mobile */}
        <div className="px-2 sm:px-3 py-2 border-b border-gray-100">
          <CategoryChips 
            onCategoryChange={handleCategoryChange}
            activeCategory={activeCategory}
          />
        </div>
        
        {/* Recommended Videos - Stacked below on mobile */}
        <div className="px-2 sm:px-3">
          <VideoRecommendations />
        </div>
      </div>

      {/* Desktop: Two column layout - Compact */}
      <div className="hidden lg:block h-screen overflow-hidden">
        <div className="flex h-full max-w-[1920px] mx-auto">
          
          {/* Left Side - Main Video Player and Details */}
          <div className="flex-1 min-w-0 overflow-y-auto scrollbar-hide">
            
            {/* Video Player Section - Reduced padding */}
            <div className="px-6 pt-3">
              <VideoPlayer />
            </div>
            
            {/* Video Details */}
            <VideoDetails />
            
          </div>
          
          {/* Right Side - Recommended Videos - More compact */}
          <div className="w-[402px] xl:w-[420px] 2xl:w-[426px] flex-shrink-0 bg-white overflow-hidden border-l border-gray-100">
            
            {/* Category Filter Chips - Reduced padding */}
            <div className="px-3 py-2 border-b border-gray-100">
              <CategoryChips 
                onCategoryChange={handleCategoryChange}
                activeCategory={activeCategory}
              />
            </div>
            
            {/* Recommended Videos List */}
            <div className="h-full overflow-y-auto scrollbar-hide">
              <VideoRecommendations />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}