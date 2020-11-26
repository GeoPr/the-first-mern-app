import { SHOW_LOADER, HIDE_LOADER } from './actionsTypes';

export const showLoader = () => ({
	type: SHOW_LOADER
} as const)

export const hideLoader = () => ({
	type: HIDE_LOADER
} as const)