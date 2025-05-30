'use client'
import React, { useState } from 'react'

/**
 * Category Chips Component - Filter chips for video categories
 * 
 * Displays horizontal scrollable chips matching YouTube's design:
 * - Active state styling
 * - Hover effects
 * - Proper spacing and typography
 * 
 * Note: This is a client component because it uses useState for interactivity
 */

const categories = [
  'All', 'Music', 'Gaming', 'News', 'Live', 'User interface design',
  'Computer programming', 'Web development', 'Graphic design',
  'Figma', 'Adobe', 'Typography', 'Wireframing'
];

export default function CategoryChips() {
  const [activeChip, setActiveChip] = useState('All');

  return (
    <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide pb-2">
      {/* 
        Container:
        - flex items-center: Horizontal layout with center alignment
        - space-x-3: CSS gap: 0.75rem; (12px horizontal gap between chips)
        - overflow-x-auto: CSS overflow-x: auto; (horizontal scrolling)
        - scrollbar-hide: Custom class to hide scrollbar
        - pb-2: CSS padding-bottom: 0.5rem; (8px bottom padding)
      */}
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveChip(category)}
          className={`
            flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
            ${activeChip === category 
              ? 'bg-black text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {/* 
            Chip button styling:
            - flex-shrink-0: CSS flex-shrink: 0; (prevents shrinking)
            - px-3 py-1.5: CSS padding: 0.375rem 0.75rem; (6px vertical, 12px horizontal)
            - rounded-full: CSS border-radius: 9999px; (pill shape)
            - text-sm: CSS font-size: 0.875rem; (14px font)
            - font-medium: CSS font-weight: 500; (medium weight)
            - transition-all duration-200: Smooth transitions
            
            Active state:
            - bg-black text-white: Black background with white text
            
            Inactive state:
            - bg-gray-100: Light gray background
            - text-gray-700: Dark gray text
            - hover:bg-gray-200: Darker gray on hover
          */}
          {category}
        </button>
      ))}
    </div>
  )
}