import { getCachedVideo, setCachedVideo } from '@/utils/cache';

export default async function handler(req, res) {
  const { id } = req.query;
  
  try {
    let videoData = getCachedVideo(id);
    
    if (!videoData) {
      // Fetch all videos to find this one
      const videosRes = await fetch(`${process.env.NEXTAUTH_URL}/api/videos`);
      const { videos } = await videosRes.json();
      
      videoData = videos.find(v => v.id === id);
      
      if (videoData) {
        // Add the video URL
        videoData.url = `https://cdn.videy.co/${id}.mp4`;
        setCachedVideo(id, videoData);
      }
    }
    
    if (videoData) {
      res.status(200).json(videoData);
    } else {
      res.status(404).json({ error: 'Video not found' });
    }
  } catch (error) {
    console.error('Video detail API error:', error);
    res.status(500).json({ error: 'Failed to fetch video details' });
  }
}