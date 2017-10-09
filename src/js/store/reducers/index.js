import { combineReducers } from 'redux'
import poniesList from './ponies'
import filterPopup from './filterPopup'
import filter from './filter'

export default combineReducers({
    poniesList,
    filterPopup,
    filter,
})