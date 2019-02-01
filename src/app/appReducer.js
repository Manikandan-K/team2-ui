import { SELECT_SHOW, SELECT_MOVIE } from './actions'

const reducer = (state = { show: undefined, movie: undefined, location: undefined, tickets: undefined, showDate: undefined }, action) => {
    switch (action.type) {
        case SELECT_SHOW: return { ...state, show: action.payload.show, tickets: action.payload.tickets, showDate: action.payload.showDate };
        case SELECT_MOVIE: return { ...state, movie: action.payload };
        default: return { ...state }
    }
}

export default reducer;