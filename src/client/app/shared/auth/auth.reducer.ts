import { Action } from '@ngrx/store';

import { authActionType } from "./auth.action";
import { AuthState } from "./auth.model";

let initialAuthState: AuthState = {
	isAuthenticated: false
};

export function authReducer(state = initialAuthState, action: Action): AuthState {
	switch (action.type) {
		case authActionType.LOGIN:
			return {
				isAuthenticated: true
			};

		case authActionType.LOGOUT:
			return {
				isAuthenticated: false
			};

		default:
			return state;
	}
}
