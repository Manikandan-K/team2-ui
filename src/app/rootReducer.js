import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import locations from '../locations/reducers';
import shows from '../shows/reducer';

const rootReducer = combineReducers({
  movies,
  locations,
  shows,
  routing: routerReducer,
});

export default rootReducer;
