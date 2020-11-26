import { SET_LINK } from './actionsTypes';
import { ILink } from './currentLinkReducer'

export const setLink = (link: ILink) => ({
	type: SET_LINK,
	payload: { link }
} as const)
