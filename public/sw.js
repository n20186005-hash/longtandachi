/* LongtanDachi.com service worker: static asset caching + offline-friendly navigation */
const VERSION = 'longtan-dachi-v1';
const CORE_CACHE = `${VERSION}-core`;
const PAGE_CACHE = `${VERSION}-pages`;

const CORE_ASSETS = [
  '/',
  '/photo-credits/',
  '/site.webmanifest',
  '/favicon.svg',
  '/images/icon-1024.png',
  '/images/longtan-golden-hour-768.webp',
  '/images/longtan-night-768.webp',
  '/images/longtan-blue-hour-768.webp',
  '/images/longtan-boardwalk-768.webp',
  '/images/longtan-nantian-temple-768.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CORE_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    // Pages: network first, fall back to cache when offline.
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  // Static assets: cache first, refresh in background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CORE_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
