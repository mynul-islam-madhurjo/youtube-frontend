'use client';

import { useState, useEffect } from 'react';
import { getVideos, getVideoData, getCategories, getRecommendedVideos, searchVideos } from '../lib/api';

/**
 * Hook to fetch videos list
 * @param {object} filters - Filter parameters (category, search, etc.)
 * @returns {object} { videos, loading, error, refetch }
 */
export function useVideos(filters = {}) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getVideos(filters);
      setVideos(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [JSON.stringify(filters)]); // Re-fetch when filters change

  return { videos, loading, error, refetch: fetchVideos };
}

/**
 * Hook to fetch categories
 * @returns {object} { categories, loading, error }
 */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

/**
 * Hook to fetch video details
 * @param {number|null} videoId - Video ID (null fetches first available video)
 * @returns {object} { video, loading, error }
 */
export function useVideoDetails(videoId = null) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getVideoData(videoId);
        setVideo(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching video details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  return { video, loading, error };
}

/**
 * Hook for search functionality
 * @returns {object} { searchResults, searching, searchError, performSearch }
 */
export function useSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      setSearchError(null);
      const data = await searchVideos(query);
      setSearchResults(data);
    } catch (err) {
      setSearchError(err.message);
      console.error('Error searching videos:', err);
    } finally {
      setSearching(false);
    }
  };

  return { searchResults, searching, searchError, performSearch };
}

/**
 * Hook to fetch recommended videos
 * @param {number} videoId - Current video ID
 * @returns {object} { recommendedVideos, loading, error }
 */
export function useRecommendedVideos(videoId) {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchRecommended = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRecommendedVideos(videoId);
        setRecommendedVideos(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching recommended videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommended();
  }, [videoId]);

  return { recommendedVideos, loading, error };
}
