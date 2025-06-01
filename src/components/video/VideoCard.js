'use client';

import { getStaticUrl } from '@/lib/api';
import SafeImage from '@/components/common/SafeImage';

/**
 * VideoCard component for displaying video thumbnails and metadata
 * @param {object} video - Video data from API
 */
export default function VideoCard({ video }) {
  // Format view count for display
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
        <SafeImage
          src={getStaticUrl(video.thumbnail)}
          alt={video.title}
          type="video"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="flex gap-3">
        {/* Channel Avatar - Use SafeImage instead */}
        <div className="flex-shrink-0">
          <SafeImage
            src={getStaticUrl(video.channel.avatar)}
            alt={video.channel.name}
            type="avatar"
            fallbackText={video.channel.name.charAt(0).toUpperCase()}
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          {/* Video Title */}
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>

          {/* Channel Name */}
          <div className="flex items-center mt-1">
            <span className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {video.channel.name}
            </span>
            {video.channel.verified && (
              <svg 
                className="w-3 h-3 ml-1 text-gray-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
          </div>

          {/* Views and Upload Date */}
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <span>{formatViews(video.views)}</span>
            <span className="mx-1">•</span>
            <span>{video.uploaded_display}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
