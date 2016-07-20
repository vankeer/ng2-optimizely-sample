export interface ExposedState {
	isAuthenticated: boolean;
}

export interface ExposingWindow extends Window {
	state: ExposedState;
}