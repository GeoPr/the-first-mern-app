import { rootReducer } from './reducers/rootReducer';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk))