import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../shared/app.model";
import { AuthSelector } from "../shared/auth/auth.selector";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'sd-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css'],
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent implements OnInit {

	isAuthenticated$: Observable<boolean>;

	constructor(
		private store: Store<AppState>,
		private authSelector: AuthSelector
	) {
	}

	ngOnInit() {
		this.isAuthenticated$ = this.store.select(this.authSelector.isAuthenticated());
	}
}
