import * as actionFilter from '../actions/filter'

export function setFilter(filter) {
    return  (dispatch) => {
        dispatch(actionFilter.setFilter(filter))
    }
}

export function resetFilter(filter) {
    return  (dispatch) => {
        dispatch(actionFilter.resetFilter(filter))
    }
}