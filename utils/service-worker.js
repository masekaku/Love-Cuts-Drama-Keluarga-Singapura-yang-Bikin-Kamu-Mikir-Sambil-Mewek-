const CACHE_NAME = 'video-site-v1';
const PRE_CACHE = [
  '/',
  '/_next/static/css/styles.css',
  '/telegram-icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRE_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  // Network-first for videos
  if (event.request.url.includes('/videos/')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
  }
  // Cache-first for static assets
  else {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request))
    );
  }
});