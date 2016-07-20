import { Injectable } from "@angular/core";

import { AppState } from "../app.model";

@Injectable()
export class AuthSelector {

	isAuthenticated() {
		return (state: AppState): boolean => state.auth.isAuthenticated;
	}
}
