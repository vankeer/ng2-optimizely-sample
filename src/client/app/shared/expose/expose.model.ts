import { Subject } from "rxjs/Subject";

export interface ExposedState {
	isAuthenticated: boolean;
}

export interface ExposingWindow extends Window {
	stateUpdates: Subject<ExposedState>;
}
