/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
            serviceWorker = registration.installing;
            document.querySelector('#kind').textContent = 'installing';
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
            document.querySelector('#kind').textContent = 'waiting';
        } else if (registration.active) {
            serviceWorker = registration.active;
            document.querySelector('#kind').textContent = 'active';
        }
        if (serviceWorker) {
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
}