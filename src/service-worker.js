// src/service-worker.js
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';

// 1. Precache all the webpack-generated assets
precacheAndRoute(self.__WB_MANIFEST);

// 2. Serve index.html for navigation requests:
const handler = createHandlerBoundToURL('/index.html');

const navigationRoute = new NavigationRoute(handler, {
  // Don’t treat /static/* as a navigation request
  denylist: [/^\/static\/.*/],
});

registerRoute(navigationRoute);
