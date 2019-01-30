import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import locations from '../locations/reducers';

const rootReducer = combineReducers({
  movies,
  locations,
  routing: routerReducer,
});

export default rootReducer;
