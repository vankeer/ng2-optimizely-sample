import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../app.model";
import { AuthAction } from "../auth/auth.action";
import { AuthSelector } from "../auth/auth.selector";

/**
 * This class represents the toolbar component.
 */
@Component({
	moduleId: module.id,
	selector: 'sd-toolbar',
	templateUrl: 'toolbar.component.html',
	styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {

	private isAuthenticated$: Observable<boolean>;

	constructor(
		private store: Store<AppState>,
		private authAction: AuthAction,
		private authSelector: AuthSelector
	) {
		this.isAuthenticated$ = this.store.select(this.authSelector.isAuthenticated());
	}

	login() {
		this.store.dispatch(this.authAction.login());
	}

	logout() {
		this.store.dispatch(this.authAction.logout());
	}
}
