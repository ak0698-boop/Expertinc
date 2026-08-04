// Minimal service worker — enables "Add to Home Screen" / installability.
// This tool always needs live data, so we don't cache pages; we just
// pass requests straight through to the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
