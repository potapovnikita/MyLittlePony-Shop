
export default function poniesList(state = [], action) {
    switch (action.type) {
        case 'GET_PONIES_LIST':
            return action.payload
        default: return state
    }
}