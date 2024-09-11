// rootReducer.js
import { combineReducers } from 'redux';
import moviesReducer from './moviesSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // other reducers
});

export default rootReducer;
