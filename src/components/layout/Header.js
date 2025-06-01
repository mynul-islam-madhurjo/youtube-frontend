'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Mic, Bell, Plus, Menu } from 'lucide-react';
import Logo from '@/components/common/Logo';
import UserMenu from '@/components/common/UserMenu';
import { useSearch } from '@/hooks/useApi';

/**
 * Header component with integrated search functionality - Fixed alignment
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
    <header className="flex items-center justify-between px-4 py-0 h-14 bg-white border-b border-gray-200 sticky top-0 z-50">
      
      {/* Left section - Menu button and Logo */}
      <div className="flex items-center space-x-4">
        {/* Hamburger menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="w-10 h-10 hover:bg-gray-100 rounded-full"
        >
          <Menu className="w-6 h-6" />
        </Button>
        
        {/* YouTube Logo */}
        <Logo />
      </div>

      {/* Center section - Search Bar with API integration */}
      <div className="flex-1 max-w-2xl mx-4">
        <form onSubmit={handleSearch} className="flex items-center justify-center">
          {/* Search Input Container */}
          <div className="flex items-center max-w-lg w-full">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base h-10"
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
              className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 h-10"
              variant="ghost"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
          </div>

          {/* Voice Search Button */}
          <Button
            type="button"
            className="ml-2 p-2 bg-gray-50 rounded-full hover:bg-gray-100 w-10 h-10"
            variant="ghost"
          >
            <Mic className="w-5 h-5 text-gray-600" />
          </Button>
        </form>

        {/* Search Error Display - positioned below search bar */}
        {searchError && (
          <div className="mt-1 text-xs text-red-600 text-center">
            Search error: {searchError}
          </div>
        )}
      </div>

      {/* Right section - User actions */}
      <div className="flex items-center space-x-2">
        
        {/* Create button with text */}
        <Button 
          variant="ghost"
          className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-full"
        >
          <Plus className="w-6 h-6" />
          <span className="text-sm font-medium">Create</span>
        </Button>
        
        {/* Notifications button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="w-10 h-10 rounded-full hover:bg-gray-100 relative"
        >
          <Bell className="w-6 h-6" />
          
          {/* Notification badge (red dot) */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
        </Button>
        
        {/* User profile menu */}
        <UserMenu />
      </div>
    </header>
  )
}