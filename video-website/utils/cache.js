import LRU from 'lru-cache';

// Cache for video list
const videoListCache = new LRU({
  max: 1,
  maxAge: 1000 * 60 * 5, // 5 minutes
});

// Cache for individual videos
const videoCache = new LRU({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1 hour
});

export const getCachedVideos = () => videoListCache.get('latest');
export const setCachedVideos = (videos) => videoListCache.set('latest', videos);

export const getCachedVideo = (id) => videoCache.get(id);
export const setCachedVideo = (id, data) => videoCache.set(id, data);