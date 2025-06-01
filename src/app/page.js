'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import MainContent from '@/components/layout/MainContent'
import SearchResults from '@/components/video/SearchResults'

/**
 * Main page component - Original video watch page
 */
export default function Home() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Handle search results from Header component
  const handleSearchResults = (results, query) => {
    setSearchResults(results);
    setSearchQuery(query);
    setIsSearchMode(true);
  };

  // Handle going back to homepage
  const handleBackToHome = () => {
    setIsSearchMode(false);
    setSearchResults(null);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      
      {/* Header - Fixed at top */}
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar - Left navigation (restored) */}
        {/* <Sidebar /> */}
        
        {/* Main Content - Video watch page */}
        <MainContent />
        
      </div>
    </div>
  )
}