const CACHE_NAME = 'gk-atm-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './ESCUDO ATM.png',
  './ICONO_APP.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});