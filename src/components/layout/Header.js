'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Mic, Bell, Plus, ArrowLeft } from 'lucide-react';
import Logo from '@/components/common/Logo';
import UserMenu from '@/components/common/UserMenu';
import { useSearch } from '@/hooks/useApi';

/**
 * Header component without sidebar menu button
 */
export default function Header({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const { searchResults, searching, searchError, performSearch } = useSearch();

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await performSearch(searchQuery);
      // Pass search results to parent component if needed
      if (onSearchResults) {
        onSearchResults(searchResults, searchQuery);
      }
      // Close mobile search after submitting
      setIsMobileSearchOpen(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="flex items-center justify-between px-3 sm:px-4 py-0 h-14 bg-white border-b border-gray-200 sticky top-0 z-50">
      
      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="md:hidden absolute inset-0 bg-white z-50 flex items-center px-4">
          {/* Back button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="w-10 h-10 hover:bg-gray-100 rounded-full mr-4"
            onClick={() => setIsMobileSearchOpen(false)}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          
          {/* Mobile Search Form */}
          <form onSubmit={handleSearch} className="flex-1 flex items-center">
            <div className="flex items-center flex-1">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search YouTube"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-base h-10"
                  autoFocus
                />
                {searching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                  </div>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={searching}
                className="px-4 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 h-10"
                variant="ghost"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
            
            <Button
              type="button"
              className="ml-2 p-2 bg-gray-50 rounded-full hover:bg-gray-100 w-10 h-10"
              variant="ghost"
            >
              <Mic className="w-5 h-5 text-gray-600" />
            </Button>
          </form>
        </div>
      )}

      {/* Normal Header Content */}
      <div className={`flex items-center justify-between w-full ${isMobileSearchOpen ? 'md:flex hidden' : 'flex'}`}>
        
        {/* Left section - Just Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center section - Search Bar - More centered */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6 lg:mx-8">
          <form onSubmit={handleSearch} className="flex items-center justify-center w-full">
            <div className="flex items-center max-w-md w-full">
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
              
              <Button
                type="submit"
                disabled={searching}
                className="px-5 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 h-10"
                variant="ghost"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            <Button
              type="button"
              className="ml-2 p-2 bg-gray-50 rounded-full hover:bg-gray-100 w-10 h-10"
              variant="ghost"
            >
              <Mic className="w-5 h-5 text-gray-600" />
            </Button>
          </form>
        </div>

        {/* Right section - User actions - Compact spacing */}
        <div className="flex items-center space-x-1">
          
          {/* Mobile Search Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden w-10 h-10 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMobileSearchOpen(true)}
          >
            <Search className="w-6 h-6" />
          </Button>
          
          {/* Create button */}
          <Button 
            variant="ghost"
            className="hidden sm:flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-full"
          >
            <Plus className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:inline">Create</span>
          </Button>
          
          {/* Create button - Mobile (icon only) */}
          <Button 
            variant="ghost" 
            size="icon"
            className="sm:hidden w-10 h-10 hover:bg-gray-100 rounded-full"
          >
            <Plus className="w-5 h-5" />
          </Button>
          
          {/* Notifications button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="w-10 h-10 rounded-full hover:bg-gray-100 relative"
          >
            <Bell className="w-5 h-5" />
            
            {/* Notification badge (red dot) */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
          </Button>
          
          {/* User profile menu */}
          <UserMenu />
        </div>
      </div>

      {/* Search Error Display */}
      {searchError && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-red-600 text-center bg-white px-2 py-1 rounded shadow">
          Search error: {searchError}
        </div>
      )}
    </header>
  );
}