const CACHE_NAME = 'shohojbd-v3';
const STATIC_ASSETS = [
  '/',
  '/offline/',
  '/sorkari-seba/',
  '/exam-o-vorti/',
  '/local-guide/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/favicon_io/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/social-share-default.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          return caches.match('/offline/');
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      if (response) return response;
      return fetch(request).then((fetchResponse) => {
        const clone = fetchResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return fetchResponse;
      }).catch(() => caches.match('/offline/'));
    })
  );
});
