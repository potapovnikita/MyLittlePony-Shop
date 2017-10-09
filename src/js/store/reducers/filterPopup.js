export default function filterPopup(state = [], action) {
    switch (action.type) {
        case 'SHOW_FILTER':
            return action.payload
        default: return state
    }
}