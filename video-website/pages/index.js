import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import VideoPlayer from '@/components/VideoPlayer';
import TelegramPopup from '@/components/TelegramPopup';
import VideoList from '@/components/VideoList';

export default function Home() {
  const [videoData, setVideoData] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Get video ID from URL query
        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get('video') || '7nNziN911';
        
        // Fetch all videos
        const videosRes = await fetch('/api/videos');
        const { videos } = await videosRes.json();
        setAllVideos(videos);
        
        // Fetch specific video data
        const videoRes = await fetch(`/api/video/${videoId}`);
        const data = await videoRes.json();
        setVideoData(data);
        
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    
    // Prefetch next video data
    const prefetchNextVideo = async () => {
      if (allVideos.length > 1) {
        const nextVideoId = allVideos[1].id;
        fetch(`/api/video/${nextVideoId}`);
      }
    };
    
    prefetchNextVideo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-6 px-4">
        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4">Loading video...</p>
          </div>
        ) : (
          <>
            <VideoPlayer videoData={videoData} />
            <VideoList 
              videos={allVideos} 
              currentVideoId={videoData?.id} 
            />
          </>
        )}
      </main>
      <TelegramPopup />
    </div>
  );
}