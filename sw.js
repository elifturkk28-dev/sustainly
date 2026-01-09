const CACHE_NAME = 'sustainly-cache-v1';
const urlsToCache = [
  '/sustainly/',
  '/sustainly/index.html',
  '/sustainly/manifest.json',
  '/sustainly/icon-192.png',
  '/sustainly/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});