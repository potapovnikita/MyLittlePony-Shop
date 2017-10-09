import * as actions from '../constants'

export function showFilter(isShow) {
    return {
        type: actions.showFilter,
        payload: isShow
    }
}