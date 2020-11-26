import { SHOW_LOADER, HIDE_LOADER } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions'

interface IInitalState { isLoading: boolean }
const initalState: IInitalState = { isLoading: false }

type ActionsTypes = TActions<typeof actions>

export const loaderReducer = (
	state: IInitalState = initalState,
	action: ActionsTypes,
): IInitalState => {
	switch (action.type) {
		case SHOW_LOADER: {
			return { ...state, isLoading: true }
		}

		case HIDE_LOADER: {
			return { ...state, isLoading: false }
		}

		default: return state
	}
}