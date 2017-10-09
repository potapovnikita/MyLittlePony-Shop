import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import { filter } from '../libs/emptyFilter'

const middlewares = [
    thunk,
]

const initialState = {
    poniesList: [],
    filterPopup: false,
    filter,
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))


export default store