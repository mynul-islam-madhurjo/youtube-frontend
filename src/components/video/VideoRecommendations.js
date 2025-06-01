'use client';
import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useVideos } from '@/hooks/useApi';
import { getVideoUrl, getAvatarUrl } from '@/lib/api';
import SafeImage from '@/components/common/SafeImage';

export default function VideoRecommendations() {
  const { videos, loading, error } = useVideos({ limit: 9 });
  const videosToShow = error ? [] : videos;

  if (loading) {
    return (
      <div className="space-y-2 p-2 sm:p-3">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex gap-2 animate-pulse">
            <div className="w-[168px] h-[94px] bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1 px-2 sm:px-3 py-1 sm:py-2">
      {videosToShow.map((video) => (
        <div key={video.id}>
          {/* Regular Video Item - More compact */}
          <div className="flex gap-2 p-1 sm:p-2 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors duration-200">
            {/* Thumbnail - Consistent sizing */}
            <div className="relative flex-shrink-0">
              <SafeImage
                src={getVideoUrl(video.thumbnail)}
                alt={video.title}
                type="video"
                className="w-[168px] h-[94px] object-cover rounded-lg"
              />
              
              {/* Duration Badge */}
              {video.duration && (
                <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-[2px] text-white text-[11px] px-1.5 py-0.5 rounded font-medium">
                  {video.duration}
                </div>
              )}
            </div>
            
            {/* Content - Compact spacing */}
            <div className="flex-1 min-w-0">
              {/* Title - Reduced line height */}
              <h3 className="text-[14px] font-medium text-gray-900 line-clamp-2 leading-[18px] mb-1 group-hover:text-gray-700 transition-colors">
                {video.title}
              </h3>
              
              {/* Channel Name - Compact */}
              <div className="flex items-center mb-0.5">
                <span className="text-[12px] text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                  {video.channel.name}
                </span>
                {video.channel.verified && (
                  <svg className="w-3 h-3 ml-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              {/* Views and Upload Time */}
              {video.views_display && video.uploaded_display && (
                <div className="flex items-center text-[12px] text-gray-600">
                  <span>{video.views_display}</span>
                  <span className="mx-1">•</span>
                  <span>{video.uploaded_display}</span>
                </div>
              )}
            </div>
            
            {/* More button - Always visible, compact */}
            <div className="flex-shrink-0 self-start">
              <button className="p-1 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}