import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

/**
 * User Menu Component
 * 
 * Displays user profile picture and handles user menu interactions
 * Uses shadcn/ui Avatar component for proper styling
 */
export default function UserMenu() {
  return (
    <div className="relative">
      
      {/* User Avatar Button */}
      <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
        
        <Avatar className="w-8 h-8 hover:ring-2 hover:ring-gray-300 transition-all">
          {/* User profile image - placeholder for now */}
          <AvatarImage 
            src="/placeholder-avatar.jpg" 
            alt="User profile"
          />
          
          {/* Fallback if no image is available */}
          <AvatarFallback className="bg-gradient-to-br from-red-700 to-red-800 text-white text-sm font-bold">
            M
          </AvatarFallback>
        </Avatar>
      </button>
    </div>
  );
}