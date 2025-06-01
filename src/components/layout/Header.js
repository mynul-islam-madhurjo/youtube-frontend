'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Mic, Bell, Plus, User } from 'lucide-react';
import Logo from '@/components/common/Logo';
import UserMenu from '@/components/common/UserMenu';
import { useSearch } from '@/hooks/useApi';

/**
 * Header component with integrated search functionality
 */
export default function Header({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchResults, searching, searchError, performSearch } = useSearch();

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await performSearch(searchQuery);
      // Pass search results to parent component if needed
      if (onSearchResults) {
        onSearchResults(searchResults);
      }
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-2xl mx-auto">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
          <Logo />
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="flex items-center">
            {/* Search Input Container */}
            <div className="flex flex-1 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base"
                />
                {searching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                  </div>
                )}
              </div>
              
              {/* Search Button */}
              <Button
                type="submit"
                disabled={searching}
                className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                variant="ghost"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Voice Search Button */}
            <Button
              type="button"
              className="ml-2 p-2 bg-gray-50 rounded-full hover:bg-gray-100"
              variant="ghost"
            >
              <Mic className="w-5 h-5 text-gray-600" />
            </Button>
          </form>

          {/* Search Error Display */}
          {searchError && (
            <div className="mt-2 text-sm text-red-600 text-center">
              Search error: {searchError}
            </div>
          )}
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Create Button */}
          <Button variant="ghost" className="p-2">
            <Plus className="w-5 h-5" />
            <span className="ml-1 hidden sm:inline">Create</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>

          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}