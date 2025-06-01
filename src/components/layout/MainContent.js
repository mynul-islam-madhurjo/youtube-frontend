'use client';

import React from 'react'
import CategoryChips from '@/components/video/CategoryChips'
import VideoRecommendations from '@/components/video/VideoRecommendations'
import VideoPlayer from '@/components/video/VideoPlayer'
import VideoDetails from '@/components/video/VideoDetails'

/**
 * Main Content Component - Video Watch Page Layout
 * 
 * Pixel-perfect match to YouTube's layout:
 * - Proper container sizing and spacing
 * - Exact video player dimensions
 * - Correct sidebar proportions
 * - YouTube-accurate spacing throughout
 */
export default function MainContent() {
  return (
    <main className="flex-1 bg-white overflow-hidden">
      {/* 
        Main container:
        - flex-1: Takes remaining space after header
        - bg-white: White background
        - overflow-hidden: Prevents scrolling on main container
      */}
      
      <div className="flex h-full max-w-screen-2xl mx-auto">
        {/* 
          Content wrapper with YouTube's max width:
          - flex: Horizontal layout
          - h-full: Full height
          - max-w-screen-2xl: CSS max-width: 1536px; (YouTube's container width)
          - mx-auto: Centers the content
        */}
        
        {/* Left Side - Main Video Player and Details */}
        <div className="flex-1 min-w-0 overflow-y-auto">
          {/* 
            Left content area:
            - flex-1: Takes most space
            - min-w-0: Allows proper text truncation
            - overflow-y-auto: Scrollable content
            - NO max-width constraint to match YouTube
          */}
          
          {/* Video Player Section */}
          <div className="px-6 pt-6">
            {/* 
              Video player container:
              - px-6: CSS padding-left: 1.5rem; padding-right: 1.5rem; (24px horizontal)
              - pt-6: CSS padding-top: 1.5rem; (24px top only)
            */}
            <VideoPlayer />
          </div>
          
          {/* Video Details Section */}
          <VideoDetails />
          
          {/* Comments Section */}
          <div className="px-6 py-4">
            {/* 
              Comments container:
              - px-6: CSS padding-left: 1.5rem; padding-right: 1.5rem; (24px horizontal)
              - py-4: CSS padding-top: 1rem; padding-bottom: 1rem; (16px vertical)
            */}
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">196 Comments</h3>
            
            {/* Sort By */}
            <div className="flex items-center space-x-8 mb-6">
              <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <span>Sort by</span>
              </button>
            </div>
            
            {/* Add Comment */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                M
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full text-sm text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none pb-2 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Recommended Videos */}
        <div className="w-96 flex-shrink-0 border-l border-gray-200 flex flex-col overflow-hidden">
          
          {/* Category Filter Chips */}
          <div className="p-4 border-b border-gray-100">
            <CategoryChips />
          </div>
          
          {/* Recommended Videos List */}
          <div className="flex-1 overflow-y-auto">
            <VideoRecommendations />
          </div>
        </div>
      </div>
    </main>
  );
}