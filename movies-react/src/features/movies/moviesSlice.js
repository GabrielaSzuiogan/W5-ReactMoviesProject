import { createSlice } from "@reduxjs/toolkit";
import moviesData from "../../movies.json";

const loadState = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    return [e];
  }
};

const initialState = {
  allMovies: moviesData,
  watchlist: loadState("watchListLS"),
  favorites: loadState("favoritesLS"),
};

const moviesSlice = createSlice({
  name: "movies", // name of the slice
  initialState,
  reducers: {
    // toggle Watchlist Action
    toggleWatchlist: (state, action) => {
      const movie = action.payload; //movie object
      const exists = state.watchlist.find((m) => m.id === movie.id);

      if (exists) {
        state.watchlist = state.watchlist.filter((m) => m.id !== movie.id);
      } else {
        state.watchlist.push(movie);
      }
    },

    // toggle Favorite Action
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.find((m) => m.id === movie.id);

      if (exists) {
        state.favorites = state.favorites.filter((m) => m.id !== movie.id);
      } else {
        state.favorites.push(movie);
      }
    },
  },
});

// export the actions so components can use them
export const { toggleWatchlist, toggleFavorite } = moviesSlice.actions;

// export the reducer for the store
export default moviesSlice.reducer;
