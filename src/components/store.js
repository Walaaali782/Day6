import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit'; 
import favoritesReducer from './favoritesSlice';



const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
