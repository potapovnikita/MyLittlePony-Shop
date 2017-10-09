import * as actionFilterPopup from '../actions/filterPopup'


export function showFilter(isShow) {
    return  (dispatch) => {
        dispatch(actionFilterPopup.showFilter(isShow))
    }
}