const CACHE_NAME = 'life-cards-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 对 Firebase 网络的请求直通网络，静态文件走缓存
  if (event.request.url.includes('firebaseio.com') || event.request.url.includes('firestore.googleapis.com')) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});