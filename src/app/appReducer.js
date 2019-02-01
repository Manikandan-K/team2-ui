import { SELECT_SHOW } from './actions'

const reducer = (state = { show: undefined, movie: undefined, location: undefined, tickets: undefined, showDate: undefined }, action) => {
    switch (action.type) {
        case SELECT_SHOW: debugger; return { ...state, show: action.payload.show, tickets: action.payload.tickets, showDate: action.payload.showDate };
        default: return { ...state }
    }
}

export default reducer;