import { SET_USER_INFO } from './actionsTypes'
import { TActions } from './../rootReducer'
import * as actions from './actions'

interface IInitalState {
  token: string | null
  userId: string | null
}

const initalState: IInitalState = JSON.parse(
  localStorage.getItem('userInfo')!
) ?? { token: null, userId: null }

type ActionsTypes = TActions<typeof actions>

export const authReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  if (action.type === SET_USER_INFO) {
    const { token, userId } = action.payload
    const userInfo = { ...state, token, userId }

    localStorage.setItem('userInfo', JSON.stringify(userInfo))

    return userInfo
  }

  return state
}
