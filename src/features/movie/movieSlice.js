import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newMovie: null,
    natGeo: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newMovie = action.payload.newMovie;
      state.natGeo = action.payload.natGeo;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewMovie = (state) => state.movie.new;
export const selectNatGeo = (state) => state.movie.nageo;

export default movieSlice.reducer;