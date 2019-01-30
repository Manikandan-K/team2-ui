import { FETCH_LOCATIONS_PROGRESS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE } from './actions'

const reducer = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_LOCATIONS_PROGRESS: return {...state, fetching: true };
    case FETCH_LOCATIONS_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_LOCATIONS_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default reducer;
