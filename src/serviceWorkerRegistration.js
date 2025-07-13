// src/serviceWorkerRegistration.js

import { Workbox } from 'workbox-window';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/
  )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const wbUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    const wb = new Workbox(wbUrl);
    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        console.log('New content is available; please refresh.');
      }
    });
    wb.register();
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
