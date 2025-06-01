'use client';
import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Settings, 
  Maximize,
  MoreHorizontal
} from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  return (
    <div 
      className="w-full bg-black relative rounded-xl overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-100 to-gray-100 relative">
        
        {/* Video Content */}
        <div className="text-center text-gray-800">
          <h2 className="text-4xl font-medium mb-2">You're in the perfect spot!</h2>
        </div>

        {/* Video Controls Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Bottom Controls Container */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            
            {/* Progress Bar Container */}
            <div className="mb-2">
              <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer group">
                {/* Progress Track */}
                <div className="relative h-full">
                  {/* Buffer Progress (behind current progress) */}
                  <div className="absolute h-full bg-white/50 rounded-full" style={{ width: '25%' }}></div>
                  
                  {/* Current Progress */}
                  <div className="absolute h-full bg-red-600 rounded-full transition-all" style={{ width: '6.7%' }}></div>
                  
                  {/* Progress Thumb */}
                  <div 
                    className="absolute w-3 h-3 bg-red-600 rounded-full -top-1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" 
                    style={{ left: '6.7%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white">
              
              {/* Left Controls */}
              <div className="flex items-center space-x-2">
                {/* Play/Pause Button */}
                <button 
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  )}
                </button>

                {/* Skip Back Button */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>

                {/* Skip Forward Button */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  
                  {/* Volume Slider */}
                  <div className="w-16 h-1 bg-white/30 rounded-full cursor-pointer group">
                    <div className="h-full bg-white rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                {/* Time Display */}
                <div className="text-sm font-medium px-1">
                  <span>0:48</span>
                  <span className="text-white/70 mx-1">/</span>
                  <span>7:01</span>
                </div>

                {/* Chapter/Intro Indicator */}
                <div className="text-xs bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md border border-white/20">
                  <span>Intro</span>
                  <svg className="w-3 h-3 ml-1 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-1">
                {/* Autoplay Toggle */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <div className="w-5 h-5 border border-white rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </button>

                {/* Captions/Subtitles */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <div className="text-xs font-bold border border-white px-1.5 py-0.5 rounded">
                    CC
                  </div>
                </button>

                {/* Settings */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <Settings className="w-5 h-5" />
                </button>

                {/* Picture in Picture */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <div className="w-5 h-5 border-2 border-white rounded relative">
                    <div className="absolute top-0 right-0 w-2 h-1.5 border border-white bg-white/20 rounded-sm"></div>
                  </div>
                </button>

                {/* Theater Mode */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center">
                    <div className="w-3 h-2 border border-white rounded-sm"></div>
                  </div>
                </button>

                {/* Fullscreen */}
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Play Button (when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-20 h-20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all border border-white/20"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}