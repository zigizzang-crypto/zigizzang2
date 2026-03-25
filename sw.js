self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 크롬 브라우저에게 PWA(앱)로 인정받기 위해 필수로 있어야 하는 빈 공간입니다.
});
