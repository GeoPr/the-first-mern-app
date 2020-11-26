import { SET_LINKS } from './actionsTypes';
import { ILink } from './../currentLinkReducer/currentLinkReducer';

export const setLinks = (links: Array<ILink>) => ({
	type: SET_LINKS,
	payload: { links }
} as const)

