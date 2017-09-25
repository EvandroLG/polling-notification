document.addEventListener('DOMContentLoaded', () => {
  Notification.requestPermission();
  navigator.serviceWorker.register('sw.js');
});
