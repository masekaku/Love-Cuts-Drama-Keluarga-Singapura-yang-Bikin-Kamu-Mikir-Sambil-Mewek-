import { getCachedVideo, setCachedVideo } from '../utils/cache';

export async function getServerSideProps({ params }) {
  const videoId = params.id;
  let videoData = getCachedVideo(videoId);

  if (!videoData) {
    // Simulate API fetch
    videoData = await fetchVideoData(videoId);
    setCachedVideo(videoId, videoData);
  }

  return { props: { videoData } };
}

async function fetchVideoData(id) {
  // Actual API call would go here
  return { id, title: `Video ${id}`, description: '...' };
}