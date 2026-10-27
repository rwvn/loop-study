const CACHE = 'loop-v3.1-mpsi';
const BASE = new URL('./', self.location.href);
const FILES = ['./','./index.html','./style.css','./app.js','./complex-pack.js','./mpsi-packs.js','./manifest.webmanifest','./icons/icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(f => new URL(f, BASE).href))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin===self.location.origin) {
    event.respondWith(fetch(event.request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
      return response;
    }).catch(()=>caches.match(event.request).then(x=>x||caches.match(new URL('./index.html',BASE).href))));
  }
  // Cache CDN math files opportunistically after first online load.
  else if(url.hostname==='cdn.jsdelivr.net') {
    event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{
      if(res.ok||res.type==='opaque'){const copy=res.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
      return res;
    })));
  }
});