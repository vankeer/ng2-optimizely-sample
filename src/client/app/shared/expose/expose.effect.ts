import "rxjs/add/operator/map";
import "rxjs/add/operator/ignoreElements";
import { Injectable } from "@angular/core";
import { Effect, StateUpdates, StateUpdate } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";

import { AppState } from "../app.model";
import { ExposingWindow } from "./expose.model";

declare var window: ExposingWindow;

@Injectable()
export class ExposeEffect {

	@Effect() expose$: Observable<void> = this.stateUpdates$
		.map((stateUpdate: StateUpdate<AppState>) => {
			window.state = {
				isAuthenticated: stateUpdate.state.auth.isAuthenticated
			};
			// mapping to undefined on purpose
		})
		.ignoreElements();

	constructor(private stateUpdates$: StateUpdates<AppState>) {
	}

}
