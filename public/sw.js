// Auto-unregistering ServiceWorker fallback to clean up stale localhost ServiceWorkers
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      return self.clients.matchAll({ type: 'window' });
    }).then((clients) => {
      clients.forEach((client) => {
        client.navigate(client.url);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Pass-through all fetch requests directly to network without caching or falling back
  event.respondWith(fetch(event.request));
});
