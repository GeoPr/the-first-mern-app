import { SET_USER_INFO } from './actionsTypes';

export const setUserInfo = (token: string | null, userId: string | null) => ({
	type: SET_USER_INFO,
	payload: { token, userId }
} as const)
