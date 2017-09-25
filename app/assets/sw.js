self.addEventListener('install', (e) => e.waitUntil(self.skipWaiting()));

self.addEventListener('activate', () => {
  let onSuccess = (data) => {
    self.registration.showNotification('Web Notification', {
      body: data.body,
      vibrate: [300, 100, 400]
    });
  };

  setInterval(() => {
    fetch('/api/')
      .then((response) => response.json())
      .then(onSuccess);
  }, 30*60*1000);
});
