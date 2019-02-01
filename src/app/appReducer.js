import { SELECT_SHOW } from './actions'

const reducer = (state = { show: undefined, movie: undefined, location: undefined }, action) => {
    switch (action.type) {
        case SELECT_SHOW: return { ...state, show: action.payload };
        default: return { ...state }
    }
}

export default reducer;