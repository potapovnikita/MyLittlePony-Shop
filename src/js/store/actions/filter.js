import * as actions from '../constants'

export function setFilter(filter) {
    return {
        type: actions.setFilter,
        payload: filter
    }
}

export function resetFilter(filter) {
    return {
        type: actions.resetFilter,
        payload: filter
    }
}