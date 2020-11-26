import { TActions, TApp } from '../rootReducer'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { History } from 'history'
import * as loaderActions from '../loaderReducer/actions'
import * as actions from './actions'

type ActionsTypes = TActions<typeof loaderActions> | TActions<typeof actions>

type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>

export const shortenLink = (
  from: string,
  token: string | null,
  history: History,
): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader())

    try {
      const response = await axios.post(
        '/api/link/generate',
        { from },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const {
        link: { _id },
      } = response.data

      history.push(`/details/${_id}`)
    } catch (e) {}

    dispatch(loaderActions.hideLoader())
  }
}

export const getLink = (linkId: string, token: string | null): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader())

    try {
      const link = await axios.get(`/api/link/${linkId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      dispatch(actions.setLink(link.data))
    } catch (e) {}

    dispatch(loaderActions.hideLoader())
  }
}

