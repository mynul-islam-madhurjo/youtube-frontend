import React from 'react'

/**
 * Video Player Component - YouTube-accurate video player
 * 
 * Updated to match YouTube's white background and exact styling
 */
export default function VideoPlayer() {
  return (
    <div className="w-full bg-white relative rounded-xl overflow-hidden border border-gray-200">
      {/* 
        Video container with YouTube styling:
        - w-full: Full width of container
        - bg-white: WHITE background (changed from black)
        - relative: For absolute positioning
        - rounded-xl: CSS border-radius: 0.75rem; (12px - YouTube's rounded corners)
        - overflow-hidden: Clips content to rounded corners
        - border border-gray-200: Light border like YouTube
      */}
      
      <div className="aspect-video flex items-center justify-center bg-gray-100">
        {/* 
          Aspect ratio container:
          - aspect-video: CSS aspect-ratio: 16 / 9;
          - flex items-center justify-center: Centers content
          - bg-gray-100: Light gray background for placeholder
        */}
        
        {/* Placeholder Content */}
        <div className="text-center text-gray-600">
          {/* Play Button */}
          {/* <div className="w-20 h-20 bg-black bg-opacity-80 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-opacity-100 transition-all cursor-pointer">
            <svg 
              className="w-8 h-8 ml-1 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div> */}
          
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">You're in the perfect spot!</h2>
          </div>
        </div>
      </div>
      
      {/* Video Controls (YouTube style) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        {/* Progress Bar */}
        <div className="w-full bg-gray-600 h-1 rounded-full mb-3 cursor-pointer">
          <div className="bg-red-600 h-1 rounded-full transition-all" style={{ width: '15%' }}></div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <span className="text-sm">0:48 / 7:01</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">Intro</span>
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4V4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}