import React from 'react'

/**
 * YouTube Logo Component
 * 
 * Displays the YouTube logo with proper styling
 * Uses inline SVG for the YouTube logo to match the exact design
 */
export default function Logo() {
  return (
    <div className="flex items-center">
      
      {/* YouTube Logo SVG - Simplified version matching YouTube's design */}
      <div className="flex items-center space-x-1">
        
        {/* YouTube Play Button Icon */}
        <div className="relative">
          
          {/* Red rounded rectangle background */}
          <div className="w-7 h-5 bg-red-600 rounded-sm flex items-center justify-center">
            
            {/* White play triangle */}
            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-0.5">
            </div>
          </div>
        </div>
        
        {/* YouTube Text */}
        <span className="text-xl font-bold text-black tracking-tight">
          YouTube
        </span>
      </div>
    </div>
  );
}