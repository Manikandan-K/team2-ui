import { FETCH_SHOW_PROGRESS, FETCH_SHOW_SUCCESS, FETCH_SHOW_FAILURE } from './actions'

const reducer = (state = { fetching: false, items: [] }, action) => {
    switch (action.type) {
        case FETCH_SHOW_PROGRESS: return { ...state, fetching: true };
        case FETCH_SHOW_SUCCESS: return { ...state, fetching: false, items: action.payload };
        case FETCH_SHOW_FAILURE: return { ...state, fetching: false, error: true }
        default: return { ...state }
    }
}

export default reducer;