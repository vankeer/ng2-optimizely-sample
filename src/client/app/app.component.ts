import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationEnd, Event } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { Store } from "@ngrx/store";

import { Config, NavbarComponent, ToolbarComponent } from './shared/index';
import { AppState } from "./shared/app.model";
import {
	EXPOSE_PROVIDERS,
	ExposeAction,
	ExposingWindow
} from "./shared/expose/index";

declare var window: ExposingWindow;

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
	moduleId: module.id,
	selector: 'sd-app',
	viewProviders: [EXPOSE_PROVIDERS, HTTP_PROVIDERS],
	templateUrl: 'app.component.html',
	directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
export class AppComponent {

	constructor(
		router: Router,
		store: Store<AppState>,
		exposeAction: ExposeAction
	) {
		console.log('Environment config', Config);

		router.events.subscribe((e: Event) => {
			if (e instanceof NavigationEnd) {
				store.dispatch(exposeAction.expose());
			}
		});
	}
}
