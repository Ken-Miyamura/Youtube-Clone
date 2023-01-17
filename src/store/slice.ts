import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../interface';

const initialState: InitialState = {
	videos: [],
  currentPlaying: null,
  searchItem: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  // 追加のreducer
  extraReducers: (builder) => {},
})

export default YoutubeSlice.reducer;
