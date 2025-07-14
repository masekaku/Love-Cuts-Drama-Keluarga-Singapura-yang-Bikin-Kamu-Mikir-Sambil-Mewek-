import { useEffect } from 'react';

export default function VideoPlayer({ videoId }) {
  // Prefetch related videos on hover
  const prefetchRelated = () => {
    // In real app: fetch('/api/related-videos')
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div 
        className="mt-4 p-2 bg-gray-100 rounded hover:bg-gray-200" 
        onMouseEnter={prefetchRelated}
      >
        <h2 className="text-xl font-semibold">Video Title</h2>
        <p className="text-gray-600">Description...</p>
      </div>
    </div>
  );
}