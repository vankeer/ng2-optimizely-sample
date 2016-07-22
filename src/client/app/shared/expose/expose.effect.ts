import "rxjs/add/operator/map";
import "rxjs/add/operator/ignoreElements";
import { Injectable } from "@angular/core";
import { Effect, StateUpdates, StateUpdate } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { AppState } from "../app.model";
import { ExposingWindow, ExposedState } from "./expose.model";

declare var window: ExposingWindow;

@Injectable()
export class ExposeEffect {

	@Effect() expose$: Observable<void> = this.stateUpdates$
		.map((stateUpdate: StateUpdate<AppState>) => {
			setTimeout(() => {
				window.stateUpdates.next({
					isAuthenticated: stateUpdate.state.auth.isAuthenticated
				});
			});
			// mapping to undefined on purpose
		})
		.ignoreElements();

	constructor(private stateUpdates$: StateUpdates<AppState>) {
		window.stateUpdates = new Subject<ExposedState>();
	}

}
