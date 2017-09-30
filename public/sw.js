let hasNotification = false;

self.addEventListener('install', (e) => e.waitUntil(self.skipWaiting()));
self.addEventListener('message', (e) => hasNotification = e.data.notification.hasPermission);

self.addEventListener('activate', () => {
  let onSuccess = (data) => {
    self.registration.showNotification('Web Notification', {
      body: data.body,
      vibrate: [300, 100, 400]
    });
  };

  setInterval(() => {
    if (!hasNotification) { return; }

    fetch('/api/')
      .then((response) => response.json())
      .then(onSuccess);
  }, 10000);
});
