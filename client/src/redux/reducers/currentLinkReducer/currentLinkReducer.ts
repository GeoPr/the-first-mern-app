import { SET_LINK } from './actionsTypes'
import { TActions } from '../rootReducer'
import * as actions from './actions'

export interface ILink {
  clicks: number
  code: string
  date: string
  from: string
  owner: string
  to: string
  __v: number
  _id: number
}

type TInitalState = ILink | null

const initalState: TInitalState = null

type ActionsTypes = TActions<typeof actions>

export const currentLinkReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  if (action.type === SET_LINK) {
    return action.payload.link
  }

  return state
}
