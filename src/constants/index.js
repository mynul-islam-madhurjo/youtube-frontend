/**
 * Constants and mock data for YouTube clone
 * This file contains all static data, navigation items, and configuration
 */

// Navigation items for the main sidebar sections
export const NAVIGATION_ITEMS = {
    // Main navigation section (top of sidebar)
    main: [
      {
        id: 'home',
        name: 'Home',
        icon: 'Home',
        href: '/',
        active: true
      },
      {
        id: 'shorts',
        name: 'Shorts',
        icon: 'Zap',
        href: '/shorts',
        active: false
      },
      {
        id: 'subscriptions',
        name: 'Subscriptions',
        icon: 'Users',
        href: '/subscriptions',
        active: false
      }
    ],
    
    // Library section (Your channel, History, etc.)
    library: [
      {
        id: 'your-channel',
        name: 'Your channel',
        icon: 'User',
        href: '/channel'
      },
      {
        id: 'history',
        name: 'History',
        icon: 'History',
        href: '/history'
      },
      {
        id: 'playlists',
        name: 'Playlists',
        icon: 'List',
        href: '/playlists'
      },
      {
        id: 'your-videos',
        name: 'Your videos',
        icon: 'Play',
        href: '/your-videos'
      },
      {
        id: 'watch-later',
        name: 'Watch later',
        icon: 'Clock',
        href: '/watch-later'
      },
      {
        id: 'liked-videos',
        name: 'Liked videos',
        icon: 'ThumbsUp',
        href: '/liked'
      }
    ],
  
    // Explore section
    explore: [
      {
        id: 'trending',
        name: 'Trending',
        icon: 'TrendingUp',
        href: '/trending'
      },
      {
        id: 'shopping',
        name: 'Shopping',
        icon: 'ShoppingBag',
        href: '/shopping'
      },
      {
        id: 'music',
        name: 'Music',
        icon: 'Music',
        href: '/music'
      },
      {
        id: 'movies',
        name: 'Movies',
        icon: 'Film',
        href: '/movies'
      },
      {
        id: 'live',
        name: 'Live',
        icon: 'Radio',
        href: '/live'
      },
      {
        id: 'gaming',
        name: 'Gaming',
        icon: 'Gamepad2',
        href: '/gaming'
      },
      {
        id: 'news',
        name: 'News',
        icon: 'Newspaper',
        href: '/news'
      },
      {
        id: 'sports',
        name: 'Sports',
        icon: 'Trophy',
        href: '/sports'
      },
      {
        id: 'learning',
        name: 'Learning',
        icon: 'GraduationCap',
        href: '/learning'
      },
      {
        id: 'fashion',
        name: 'Fashion & Beauty',
        icon: 'Shirt',
        href: '/fashion'
      }
    ]
  };
  
  export const CATEGORY_CHIPS = [
    { id: 'all', name: 'All', active: true },
    { id: 'music', name: 'Music', active: false },
    { id: 'gaming', name: 'Gaming', active: false },
    { id: 'news', name: 'News', active: false },
    { id: 'live', name: 'Live', active: false },
    { id: 'sports', name: 'Sports', active: false },
    { id: 'entertainment', name: 'Entertainment', active: false },
    { id: 'education', name: 'Education', active: false },
    { id: 'technology', name: 'Technology', active: false },
    { id: 'comedy', name: 'Comedy', active: false },
    { id: 'movies', name: 'Movies', active: false },
    { id: 'recently-uploaded', name: 'Recently uploaded', active: false }
  ];
  
  export const MOCK_VIDEOS = [
    {
      id: 'video_1',
      title: 'Post Job Offers For Free*',
      thumbnail: '/static/thumbnails/video1.jpg',
      duration: '16:42',
      views: 585000,
      uploadedAt: '6 months ago',
      channel: {
        id: 'channel_1',
        name: 'Indeed',
        avatar: '/static/avatars/indeed.png',
        verified: true,
        subscribers: 250000
      }
    },
    {
      id: 'video_2',
      title: 'Top UI/UX Design Tips - How to Design a Great Bottom Mobile ...',
      thumbnail: '/static/thumbnails/video2.png',
      duration: '27K',
      views: 27000,
      uploadedAt: '4 weeks ago',
      channel: {
        id: 'channel_2',
        name: 'uxpeak',
        avatar: '/static/avatars/uxpeak.jpg',
        verified: false,
        subscribers: 15000
      }
    },
    {
      id: 'video_3',
      title: 'This Video Will Take You From Junior to Senior UX/UI Designer',
      thumbnail: '/static/thumbnails/video3.jpg',
      duration: '16:42',
      views: 190000,
      uploadedAt: '6 months ago',
      channel: {
        id: 'channel_3',
        name: 'uxpeak',
        avatar: '/static/avatars/uxpeak.jpg',
        verified: false,
        subscribers: 15000
      }
    },
    {
      id: 'video_4',
      title: 'The 8 UI/UX Cheat Codes for INSTANTLY Better Designs',
      thumbnail: '/static/thumbnails/video4.jpg',
      duration: '8:06',
      views: 28000,
      uploadedAt: '1 month ago',
      channel: {
        id: 'channel_4',
        name: 'Kole Jain',
        avatar: '/static/avatars/kole.jpg',
        verified: false,
        subscribers: 8500
      }
    },
    {
      id: 'video_5',
      title: 'Top 5 UI/UI Design Tips and Tricks Everyone Needs to Kno...',
      thumbnail: '/static/thumbnails/video5.jpg',
      duration: '7:01',
      views: 60000,
      uploadedAt: '9 months ago',
      channel: {
        id: 'channel_5',
        name: 'uxpeak',
        avatar: '/static/avatars/uxpeak.jpg',
        verified: false,
        subscribers: 15000
      }
    },
    {
      id: 'video_6',
      title: 'Create a Design System with Figma - Full Course',
      thumbnail: '/static/thumbnails/video6.jpg',
      duration: '7:59',
      views: 760000,
      uploadedAt: '3 years ago',
      channel: {
        id: 'channel_6',
        name: 'freeCodeCamp.org',
        avatar: '/static/avatars/freecodecamp.jpg',
        verified: true,
        subscribers: 8900000
      }
    },
    {
      id: 'video_7',
      title: 'UX/UI Design Trends 2025',
      thumbnail: '/static/thumbnails/video7.jpg',
      duration: '12:06',
      views: 125000,
      uploadedAt: '4 months ago',
      channel: {
        id: 'channel_7',
        name: 'DesignSense',
        avatar: '/static/avatars/designsense.png',
        verified: true,
        subscribers: 450000
      }
    },
    {
      id: 'video_8',
      title: '4 levels of UI/UX design (and BIG mistakes to avoid)',
      thumbnail: '/static/thumbnails/video8.jpg',
      duration: '15:34',
      views: 123000,
      uploadedAt: '1 month ago',
      channel: {
        id: 'channel_8',
        name: 'Tim Gabe',
        avatar: '/static/avatars/timgabe.jpg',
        verified: false,
        subscribers: 95000
      }
    },
    {
      id: 'video_9',
      title: 'Free Figma Crash Course for Beginners 2025 | UI/UX Design',
      thumbnail: '/static/thumbnails/video9.jpg',
      duration: '45:23',
      views: 890000,
      uploadedAt: '2 years ago',
      channel: {
        id: 'channel_9',
        name: 'Figma',
        avatar: '/static/avatars/figma.png',
        verified: true,
        subscribers: 1200000
      }
    }
  ];
  
  export const YOUTUBE_COLORS = {
    red: '#FF0000',
    darkBackground: '#0f0f0f',
    darkSurface: '#181818',
    darkSurfaceVariant: '#272727',
    lightBackground: '#ffffff',
    lightSurface: '#f9f9f9',
    textPrimary: '#0f0f0f',
    textSecondary: '#606060',
    textTertiary: '#909090',
    border: '#e5e5e5',
    borderDark: '#3e3e3e'
  };
  
  export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  };