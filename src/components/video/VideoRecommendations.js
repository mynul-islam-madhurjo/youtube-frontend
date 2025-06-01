'use client';
import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useVideos } from '@/hooks/useApi';
import { getVideoUrl, getAvatarUrl } from '@/lib/api';
import SafeImage from '@/components/common/SafeImage';

export default function VideoRecommendations() {
  const { videos, loading, error } = useVideos({ limit: 9 });

  const fallbackVideos = [];

  const videosToShow = error ? fallbackVideos : videos;

  if (loading) {
    return (
      <div className="space-y-3 p-4">
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
    <div className="space-y-2 px-4 py-2">
      {videosToShow.map((video) => (
        <div key={video.id}>
          {/* Sponsored Content */}
          {video.isSponsored ? (
            <div className="flex gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors duration-200">
              {/* Thumbnail */}
              <div className="relative flex-shrink-0">
                <SafeImage
                  src={getVideoUrl(video.thumbnail)}
                  alt={video.title}
                  type="video"
                  className="w-[168px] h-[94px] object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-[14px] font-medium text-gray-900 line-clamp-2 leading-[20px] mb-1">
                  {video.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[12px] text-gray-600 line-clamp-2 leading-[16px] mb-2">
                  {video.subtitle}
                </p>
                
                {/* Channel */}
                <div className="flex items-center text-[12px] text-gray-600 mb-1">
                  <span className="font-medium">{video.channel.name}</span>
                  <span className="ml-1 text-[10px] bg-gray-200 px-1 rounded text-gray-500">Sponsored</span>
                </div>
                
                {/* Visit site button */}
                <button className="text-[12px] text-blue-600 hover:text-blue-800 font-medium border border-blue-600 hover:border-blue-800 px-2 py-1 rounded transition-colors">
                  Visit site ↗
                </button>
              </div>
              
              {/* More button - ALWAYS VISIBLE */}
              <div className="flex-shrink-0 self-start mt-1">
                <button className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Regular Video Item */
            <div className="flex gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors duration-200">
              {/* Thumbnail */}
              <div className="relative flex-shrink-0">
                <SafeImage
                  src={getVideoUrl(video.thumbnail)}
                  alt={video.title}
                  type="video"
                  className="w-[168px] h-[94px] object-cover rounded-lg"
                />
                
                {/* Duration Badge - MUCH MORE TRANSPARENT */}
                {video.duration && (
                  <div className="absolute bottom-1.5 right-1.5 bg-black/60 backdrop-blur-[2px] text-white text-[11px] px-1.5 py-0.5 rounded font-medium">
                    {video.duration}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-[14px] font-medium text-gray-900 line-clamp-2 leading-[20px] mb-1 group-hover:text-gray-700 transition-colors">
                  {video.title}
                </h3>
                
                {/* Channel Name */}
                <div className="flex items-center mb-1">
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
              
              {/* More button - ALWAYS VISIBLE, YOUTUBE STYLE */}
              <div className="flex-shrink-0 self-start mt-1">
                <button className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}