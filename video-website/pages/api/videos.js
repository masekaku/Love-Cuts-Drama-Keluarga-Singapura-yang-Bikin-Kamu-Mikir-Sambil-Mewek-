import { getCachedVideos, setCachedVideos } from '@/utils/cache';

export default async function handler(req, res) {
  try {
    let videos = getCachedVideos();
    
    if (!videos) {
      // In production, this would be your external API URL
      const response = await fetch(`${process.env.NEXTAUTH_URL}/mock-videos.json`);
      const data = await response.json();
      videos = data.videos;
      setCachedVideos(videos);
    }
    
    res.status(200).json({ videos });
  } catch (error) {
    console.error('Video API error:', error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
}