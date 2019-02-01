import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import locations from '../locations/reducers';
import shows from '../shows/reducer';
import app from './appReducer';

const rootReducer = combineReducers({
  app,
  movies,
  locations,
  shows,
  routing: routerReducer,
});

export default rootReducer;
