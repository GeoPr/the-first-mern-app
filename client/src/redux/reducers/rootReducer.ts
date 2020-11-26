import { linksReducer } from './linksReducer/linksReducer';
import { currentLinkReducer } from './currentLinkReducer/currentLinkReducer';
import { loaderReducer } from './loaderReducer/loaderReducer';
import { modalReducer } from './modalReducer/modalReducer';
import { authReducer } from './authReducer/authReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	auth: authReducer,
	modal: modalReducer,
	loader: loaderReducer,
	currentLink: currentLinkReducer,
	links: linksReducer
})

export type TApp = ReturnType<typeof rootReducer>

type TProperties<T> = T extends {
	[key: string]: infer U
} ? U : never

export type TActions<T extends {
	[key: string]: (...args: any[]) => any
}> = ReturnType<TProperties<T>>