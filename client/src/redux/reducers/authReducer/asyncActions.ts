import { TApp, TActions } from './../rootReducer'
import axois, { AxiosResponse } from 'axios'
import { ThunkAction } from 'redux-thunk'
import * as actions from './actions'
import * as modalActions from '../modalReducer/actions'
import * as loaderActions from '../loaderReducer/actions'
import { History } from 'history'

type ActionsTypes =
  | TActions<typeof actions>
  | TActions<typeof modalActions>
  | TActions<typeof loaderActions>

type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>

export const signUp = (
  email: string,
  password: string,
  history?: History,
): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader())

    try {
      const response = await axois.post(`/api/auth/register`, {
        email,
        password,
      })

      if (response.status === 200) {
        dispatch(modalActions.setModalStatus(200))
        await showHideModal(dispatch, response.data.message)
        history!.push('/login')
      }
    } catch (e) {
      showEror(dispatch, e.response)
    }

    dispatch(loaderActions.hideLoader())
  }
}

export const login = (email: string, password: string): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader())

    try {
      const response = await axois.post(`/api/auth/login`, {
        email,
        password,
      })

      if (response.status === 200) {
        const { token, userId } = response.data
        dispatch(actions.setUserInfo(token, userId))
      }
    } catch (e) {
      showEror(dispatch, e.response)
    }

    dispatch(loaderActions.hideLoader())
  }
}

export const logout = (): TThunk => {
  return async dispatch => {
    dispatch(loaderActions.showLoader())

    dispatch(actions.setUserInfo(null, null))
    localStorage.removeItem('userInfo')

    dispatch(loaderActions.hideLoader())
  }
}

function showHideModal(dispatch: Function, text: string) {
  dispatch(modalActions.showModal(text))
  setTimeout(() => dispatch(modalActions.hideModal()), 2000)
}

function showEror(dispatch: Function, e: AxiosResponse) {
  const { message } = e.data
  dispatch(modalActions.setModalStatus(400))
  showHideModal(dispatch, message)
}
