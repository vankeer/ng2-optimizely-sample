import { AuthAction } from "./auth.action";
import { AuthSelector } from "./auth.selector";

export * from "./auth.action";
export * from "./auth.model";
export * from "./auth.reducer";
export * from "./auth.selector";

export const AUTH_PROVIDERS: any[] = [
	AuthAction,
	AuthSelector
];
