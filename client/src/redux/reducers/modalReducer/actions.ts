import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_STATUS } from './actionsTypes';

export const showModal = (text?: string) => ({
	type: SHOW_MODAL,
	payload: { text }
} as const)
export const hideModal = () => ({ type: HIDE_MODAL } as const)
export const setModalStatus = (status: 200 | 400) => ({
	type: SET_MODAL_STATUS,
	payload: { status }
} as const)