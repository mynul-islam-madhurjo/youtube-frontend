export const NAVIGATION_ITEMS = {
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
  ];
  
  export const MOCK_VIDEOS = [];
  
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