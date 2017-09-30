const Push = {
  sendPostMessage(hasPermission) {
    navigator.serviceWorker.controller.postMessage({
      notification: {
        hasPermission: hasPermission
      }
    });
  },

  ready() {
    Push.sendPostMessage(Notification.permission === 'granted');
  },

  requestPermission() {
    Notification.requestPermission().then(function(permission) {
      Push.sendPostMessage(permission === 'granted');
    });
  }
};

export default Push;
