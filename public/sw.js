const cashData = 'pwd-app';

// cache resource file
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cashData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "/"
      ]);
    }),
  );
});

// get cached resource file
this.addEventListener('fetch', (event) => {
    if(navigator.onLine) return
    event.respondWith(
        caches.match(event.request).then((result) => {
        if (result) return result;
        }),
    );
});