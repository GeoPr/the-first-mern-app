import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_STATUS } from './actionsTypes'
import { TActions } from './../rootReducer'
import * as actions from './actions'

type ActionsTypes = TActions<typeof actions>

interface IInitalState {
  isOpen: boolean
  text: string | null
  status: number
}

const initalState: IInitalState = {
  isOpen: false,
  text: null,
  status: 200,
}

export const modalReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  switch (action.type) {
    case HIDE_MODAL: {
      return { ...state, isOpen: false }
    }

    case SHOW_MODAL: {
      const { text } = action.payload

      return {
        ...state,
        isOpen: true,
        text: text ?? state.text,
      }
    }

    case SET_MODAL_STATUS: {
      const { status } = action.payload

      return { ...state, status }
    }

    default:
      return state
  }
}
