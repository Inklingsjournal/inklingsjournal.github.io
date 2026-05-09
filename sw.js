self.addEventListener('fetch', e => {
  // Network first — always get fresh content
  // Only fall back to cache if offline
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
