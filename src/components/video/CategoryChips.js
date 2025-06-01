'use client'
import React, { useState } from 'react'
import { useCategories } from '@/hooks/useApi'

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

/**
 * CategoryChips component for filtering videos
 * Now uses real API data instead of mock data
 */
export default function CategoryChips({ onCategoryChange, activeCategory = 'all' }) {
  const { categories, loading, error } = useCategories();

  // Handle category selection and notify parent component
  const handleCategoryClick = (categorySlug) => {
    if (onCategoryChange) {
      onCategoryChange(categorySlug);
    }
  };

  if (loading) {
    return (
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
        {/* Loading skeleton */}
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            className="animate-pulse bg-gray-200 rounded-lg h-8 w-20 flex-shrink-0"
          />
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Error loading categories:', error);
    // Fallback to default categories if API fails
    const fallbackCategories = [
      { id: 1, name: 'All', slug: 'all' },
      { id: 2, name: 'Music', slug: 'music' },
      { id: 3, name: 'Gaming', slug: 'gaming' },
    ];
    
    return (
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
        {fallbackCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category.slug
                ? 'bg-black text-white' // Active state: black background, white text
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Inactive: light background
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.slug)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
            activeCategory === category.slug
              ? 'bg-black text-white' // Active state: black background, white text
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Inactive: light background
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}