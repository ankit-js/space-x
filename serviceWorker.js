const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/src/server/index.js",
  "/src/browser/index.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});
