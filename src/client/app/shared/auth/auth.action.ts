import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

const ACTION_PREFIX = "[Auth]";
export const authActionType = {
	LOGIN: `${ACTION_PREFIX} Login`,
	LOGOUT: `${ACTION_PREFIX} Logout`,
};

@Injectable()
export class AuthAction {

	login(): Action {
		return {
			type: authActionType.LOGIN
		};
	}

	logout(): Action {
		return {
			type: authActionType.LOGOUT
		};
	}
}
