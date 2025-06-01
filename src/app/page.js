'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header'
import MainContent from '@/components/layout/MainContent'
import SearchResults from '@/components/video/SearchResults'

/**
 * Main page component - Video watch page without sidebar
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
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Header - Fixed at top */}
      <Header onSearchResults={handleSearchResults} />
      
      {/* Main Content - Full width without sidebar */}
      <div className="flex-1">
        {isSearchMode ? (
          <SearchResults 
            results={searchResults}
            query={searchQuery}
            onBackToHome={handleBackToHome}
          />
        ) : (
          <MainContent />
        )}
      </div>
    </div>
  )
}