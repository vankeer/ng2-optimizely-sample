import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

const ACTION_PREFIX = "[Expose]";
export const exposeActionType = {
	EXPOSE: `${ACTION_PREFIX} Expose`
};

@Injectable()
export class ExposeAction {

	expose(): Action {
		return {
			type: exposeActionType.EXPOSE
		};
	}
}
