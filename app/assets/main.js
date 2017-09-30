import Push from './push.js';

document.addEventListener('DOMContentLoaded', () => {
  navigator.serviceWorker.register('./sw.js');

  Push.ready();
  Push.requestPermission();
});
