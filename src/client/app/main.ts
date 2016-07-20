import { APP_BASE_HREF } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { runEffects } from "@ngrx/effects";

import { authReducer } from './shared/auth/auth.reducer';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from "./shared/auth/index";
import { ExposeEffect } from "./shared/expose/expose.effect";

if ('<%= ENV %>' === 'prod') {
	enableProdMode();
}

/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms(),
	APP_ROUTER_PROVIDERS,
	{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	},
	AUTH_PROVIDERS,
	provideStore({auth: authReducer}),
	ExposeEffect,
	runEffects(ExposeEffect),
]);

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
