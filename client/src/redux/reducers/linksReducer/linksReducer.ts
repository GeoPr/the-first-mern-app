import { SET_LINKS } from './actionsTypes'
import { TActions } from './../rootReducer'
import { ILink } from '../currentLinkReducer/currentLinkReducer'
import * as actions from './actions'

type TInitalState = Array<ILink>

const initalState: TInitalState = []

type ActionsTypes = TActions<typeof actions>

export const linksReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  if (action.type === SET_LINKS) {
    return action.payload.links
  }

  return state
}
