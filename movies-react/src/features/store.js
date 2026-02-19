import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

//save to Local Storage whenever the state changes
store.subscribe(() => {
  const state = store.getState().movies;
  localStorage.setItem("watchListLS", JSON.stringify(state.watchlist));
  localStorage.setItem("favoritesLS", JSON.stringify(state.favorites));
});
