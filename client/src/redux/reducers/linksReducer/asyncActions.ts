import axios from 'axios'
import { TApp, TActions } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import * as actions from './actions'
import * as loaderActions from '../loaderReducer/actions'

type ActionsTypes = TActions<typeof actions> | TActions<typeof loaderActions>

type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>

export const getLinks = (token: string | null): TThunk => async dispatch => {
	dispatch(loaderActions.showLoader())

	try {
		const links = await axios.get('/api/link', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		dispatch(actions.setLinks(links.data))
	} catch (e) {}

	dispatch(loaderActions.hideLoader())
}

