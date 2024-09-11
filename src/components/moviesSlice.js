
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (language) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f09fb963d3e394d1aed39bb062b0eaa2&language=${language}`);
  const data = await response.json();
  return data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
