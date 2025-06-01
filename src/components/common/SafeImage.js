'use client';

import { useState } from 'react';
import { generateAvatarPlaceholder, generateVideoPlaceholder } from '@/lib/placeholders';

/**
 * SafeImage component with automatic fallbacks
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} type - Image type ('avatar' | 'video')
 * @param {string} fallbackText - Text for avatar placeholders
 * @param {string} className - CSS classes
 * @param {object} props - Other img props
 */
export default function SafeImage({ 
  src, 
  alt, 
  type = 'video', 
  fallbackText = '?', 
  className = '', 
  onError,
  ...props 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e) => {
    console.log(`❌ Image failed to load: ${src}`);
    setHasError(true);
    setIsLoading(false);
    
    // Set fallback image
    const fallback = type === 'avatar' 
      ? generateAvatarPlaceholder(fallbackText)
      : generateVideoPlaceholder();
    
    e.target.src = fallback;
    
    // Call custom onError handler if provided
    if (onError) onError(e);
  };

  const handleLoad = () => {
    setIsLoading(false);
    console.log(`✅ Image loaded: ${src}`);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
} 