import LRU from 'lru-cache';

const videoCache = new LRU({
  max: 100, // Max cached items
  maxAge: 1000 * 60 * 15, // 15 minutes
});

export const getCachedVideo = (id) => videoCache.get(id);
export const setCachedVideo = (id, data) => videoCache.set(id, data);