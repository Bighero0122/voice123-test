import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchVoiceActors } from "../services/api";

export const performSearch = createAsyncThunk(
  "search/performSearch",
  async ({ term, page = 1 }) => {
    const response = await searchVoiceActors(term, page);
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null,
    totalPages: 0,
    currentPage: 1,
    searchTerm: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.providers;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.meta.arg.page;
        state.searchTerm = action.meta.arg.term;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.results = [];
      });
  },
});

export default searchSlice.reducer;
