import React from 'react'
import { 
  Home, Zap, Users, User, History, List, Play, Clock, ThumbsUp,
  TrendingUp, ShoppingBag, Music, Film, Radio, Gamepad2, 
  Newspaper, Trophy, GraduationCap, Shirt, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NAVIGATION_ITEMS } from '@/constants'

/**
 * YouTube Sidebar Component
 * 
 * Features:
 * - Main navigation (Home, Shorts, Subscriptions)
 * - Library section with user's content
 * - Explore section with categories
 * - Subscriptions list
 * - More from YouTube section
 * - Responsive design with collapsible states
 * - Exact YouTube styling and spacing
 */

// Icon mapping for dynamic icon rendering
const ICON_MAP = {
  Home: Home,
  Zap: Zap,
  Users: Users,
  User: User,
  History: History,
  List: List,
  Play: Play,
  Clock: Clock,
  ThumbsUp: ThumbsUp,
  TrendingUp: TrendingUp,
  ShoppingBag: ShoppingBag,
  Music: Music,
  Film: Film,
  Radio: Radio,
  Gamepad2: Gamepad2,
  Newspaper: Newspaper,
  Trophy: Trophy,
  GraduationCap: GraduationCap,
  Shirt: Shirt
};

/**
 * Sidebar Navigation Item Component
 */
function SidebarItem({ item, isActive = false }) {
  const IconComponent = ICON_MAP[item.icon];
  
  return (
    <Button
      variant="ghost"
      className={`
        w-full flex items-center justify-start px-3 py-2 mb-1 text-sm font-normal
        hover:bg-gray-100 rounded-lg transition-colors duration-200
        ${isActive ? 'bg-gray-100 font-medium' : ''}
      `}
    >
      {/* Icon */}
      {IconComponent && (
        <IconComponent className="w-6 h-6 mr-6 flex-shrink-0" />
      )}
      
      {/* Item text */}
      <span className="text-left truncate">{item.name}</span>
    </Button>
  );
}

/**
 * Sidebar Section Component
 */
function SidebarSection({ title, items, showDivider = true }) {
  return (
    <div className={showDivider ? 'border-b border-gray-200 pb-3 mb-3' : ''}>
      {/* Section title (if provided) */}
      {title && (
        <h3 className="px-3 py-2 text-sm font-medium text-gray-700 uppercase tracking-wide">
          {title}
        </h3>
      )}
      
      {/* Section items */}
      <nav className="space-y-1">
        {items.map((item) => (
          <SidebarItem 
            key={item.id} 
            item={item} 
            isActive={item.active} 
          />
        ))}
      </nav>
    </div>
  );
}

/**
 * Mock subscriptions data for the subscriptions section
 */
const MOCK_SUBSCRIPTIONS = [
  { id: 'sub_1', name: 'uxpeak', isLive: false },
  { id: 'sub_2', name: 'Indeed', isLive: false },
  { id: 'sub_3', name: 'freeCodeCamp.org', isLive: true },
  { id: 'sub_4', name: 'DesignSense', isLive: false },
  { id: 'sub_5', name: 'Tim Gabe', isLive: false }
];

/**
 * Subscription Item Component (Fixed - No event handlers)
 */
function SubscriptionItem({ subscription }) {
  return (
    <Button
      variant="ghost"
      className="w-full flex items-center justify-start px-3 py-2 mb-1 text-sm font-normal hover:bg-gray-100 rounded-lg"
    >
      {/* Channel avatar */}
      <div className="w-6 h-6 mr-6 flex-shrink-0 relative">
        {/* Simple avatar with fallback */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
          {subscription.name.charAt(0).toUpperCase()}
        </div>
        
        {/* Live indicator (red dot) */}
        {subscription.isLive && (
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>
        )}
      </div>
      
      {/* Channel name */}
      <span className="text-left truncate">{subscription.name}</span>
    </Button>
  );
}

/**
 * Main Sidebar Component
 */
export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r border-gray-200 h-full flex flex-col">
      <ScrollArea className="flex-1 px-2 py-2">
        {/* Main Navigation Section */}
        <SidebarSection 
          items={NAVIGATION_ITEMS.main}
          showDivider={true}
        />
        
        {/* Library Section */}
        <SidebarSection 
          title="Library"
          items={NAVIGATION_ITEMS.library}
          showDivider={true}
        />
        
        {/* Subscriptions Section */}
        <div className="border-b border-gray-200 pb-3 mb-3">
          <h3 className="px-3 py-2 text-sm font-medium text-gray-700 uppercase tracking-wide">
            Subscriptions
          </h3>
          <nav className="space-y-1">
            {MOCK_SUBSCRIPTIONS.map((subscription) => (
              <SubscriptionItem 
                key={subscription.id} 
                subscription={subscription} 
              />
            ))}
          </nav>
          
          {/* Show more subscriptions button */}
          <Button
            variant="ghost"
            className="w-full flex items-center justify-start px-3 py-2 mt-2 text-sm font-normal hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-6 h-6 mr-6 flex-shrink-0" />
            <span className="text-left">Show more</span>
          </Button>
        </div>
        
        {/* Explore Section */}
        <SidebarSection 
          title="Explore"
          items={NAVIGATION_ITEMS.explore}
          showDivider={false}
        />
      </ScrollArea>
    </aside>
  );
}