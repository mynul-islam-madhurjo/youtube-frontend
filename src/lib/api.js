import { generateAvatarPlaceholder, generateVideoPlaceholder } from './placeholders';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Generic API request handler with error handling
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {object} options - Fetch options
 * @returns {Promise} - API response data
 */
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    console.log(`🔄 API Request: ${config.method || 'GET'} ${url}`);

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ API Response:`, data);
    
    return data;
  } catch (error) {
    console.error(`❌ API Error:`, error);
    throw error;
  }
}

/**
 * Get list of videos for homepage
 * @param {object} params - Query parameters (category, search, limit)
 * @returns {Promise<Array>} List of videos
 */
export async function getVideos(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const endpoint = `/getvideos/${queryString ? `?${queryString}` : ''}`;
  
  const response = await apiRequest(endpoint);
  return response.data || [];
}

/**
 * Get detailed video data
 * @param {number|null} videoId - Video ID (optional)
 * @returns {Promise<object>} Video details
 */
export async function getVideoData(videoId = null) {
  const endpoint = videoId ? `/getvideodata/${videoId}/` : '/getvideodata/';
  
  const response = await apiRequest(endpoint);
  return response.data;
}

/**
 * Get list of categories for filter chips
 * @returns {Promise<Array>} List of categories
 */
export async function getCategories() {
  const response = await apiRequest('/categories/');
  return response.data || [];
}

/**
 * Get recommended videos for a specific video
 * @param {number} videoId - Current video ID
 * @returns {Promise<Array>} List of recommended videos
 */
export async function getRecommendedVideos(videoId) {
  const response = await apiRequest(`/recommended/${videoId}/`);
  return response.data || [];
}

/**
 * Search videos by query
 * @param {string} query - Search query
 * @returns {Promise<Array>} List of matching videos
 */
export async function searchVideos(query) {
  const endpoint = `/search/?q=${encodeURIComponent(query)}`;
  
  const response = await apiRequest(endpoint);
  return response.data || [];
}

/**
 * Helper function to get full static file URL with proper fallbacks
 * @param {string} path - Relative path from backend
 * @param {string} type - Type of image ('avatar' | 'video')
 * @param {string} fallbackText - Text for avatar placeholder
 * @returns {string} Full URL or base64 placeholder
 */
export function getStaticUrl(path, type = 'video', fallbackText = '?') {
  if (!path) {
    return type === 'avatar' 
      ? generateAvatarPlaceholder(fallbackText)
      : generateVideoPlaceholder();
  }
  
  // If path already includes domain, return as is
  if (path.startsWith('http')) return path;
  
  // Handle paths that start with /static/ 
  if (path.startsWith('/static/')) {
    return `http://localhost:8000${path}`;
  }
  
  // Handle paths that start with /
  if (path.startsWith('/')) {
    return `http://localhost:8000/static${path}`;
  }
  
  // Handle relative paths
  return `http://localhost:8000/static/${path}`;
}

/**
 * Get avatar URL with fallback
 * @param {string} path - Avatar path
 * @param {string} name - User/channel name for initials
 * @returns {string} Avatar URL or placeholder
 */
export function getAvatarUrl(path, name = '?') {
  return getStaticUrl(path, 'avatar', name);
}

/**
 * Get video thumbnail URL with fallback
 * @param {string} path - Thumbnail path
 * @returns {string} Thumbnail URL or placeholder
 */
export function getVideoUrl(path) {
  return getStaticUrl(path, 'video');
}
