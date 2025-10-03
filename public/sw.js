const CACHE_NAME = 'app-v1';
const APP_SHELL = [
  '/',
  '/manifest.json',
  '/vite.svg',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/prueba.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(APP_SHELL);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});