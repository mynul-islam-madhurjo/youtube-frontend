import { Bell, Plus, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/common/Logo'
import UserMenu from '@/components/common/UserMenu'
import SearchBar from '@/components/common/SearchBar'

/**
 * YouTube Header Component - Using Custom SearchBar
 */
export default function Header() {
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

      {/* Center section - Custom Search bar */}
      <SearchBar />

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