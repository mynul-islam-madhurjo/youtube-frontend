import React from 'react'
import { Search, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function SearchBar() {
  return (
    <div className="flex items-center max-w-2xl flex-1 mx-8">

      
      <div className="flex w-full max-w-md mx-auto">
        
        {/* Custom Search Input + Button Container */}
        <div className="flex w-full h-10 border border-gray-300 rounded-full overflow-hidden">
          
          {/* Search Input (native input, no shadcn) */}
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 bg-white text-base placeholder-gray-500 border-0 outline-none focus:outline-none"
          />
          
          {/* Divider line between input and button */}
          <div className="w-px bg-gray-300 self-stretch"></div>
          
          {/* Search Button */}
          <button
            type="button"
            className="px-6 bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          >

            <Search className="w-5 h-5 text-gray-600" />

          </button>
        </div>
        
        {/* Voice search button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="ml-2 w-10 h-10 rounded-full hover:bg-gray-100"
        >
          <Mic className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}