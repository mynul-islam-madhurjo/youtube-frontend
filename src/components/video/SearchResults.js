/**
 * SearchResults Component
 * Displays search results from the API
 */

'use client';

import VideoGrid from './VideoGrid';

/**
 * SearchResults component for displaying search results
 * @param {Array} results - Search results from API
 * @param {boolean} loading - Loading state
 * @param {string} error - Error message
 * @param {string} query - Search query
 */
export default function SearchResults({ results, loading, error, query }) {
  if (loading) {
    return (
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="mb-6">
          <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
        </div>
        <VideoGrid videos={[]} loading={true} error={null} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Search Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 py-6">
      {/* Search Results Header */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">
          {results.length > 0 
            ? `Search results for "${query}" (${results.length} ${results.length === 1 ? 'result' : 'results'})`
            : `No results found for "${query}"`
          }
        </h2>
      </div>

      {/* Results Grid */}
      <VideoGrid videos={results} loading={false} error={null} />
    </div>
  );
} 