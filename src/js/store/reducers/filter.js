import emptyFilter from '../../libs/emptyFilter'

export default function filter(state = emptyFilter, action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        case 'RESET_FILTER':
            return emptyFilter
        default: return state
    }
}