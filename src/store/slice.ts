import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../interface';
import { getHomePageVideo } from './reducers/getHomePageVideos';

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
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
		builder.addCase(getHomePageVideo.fulfilled, (state, action) => {
			state.videos = action.payload.parsedData;
			state.nextPageToken = action.payload.nextPageToken;
		})
	},
})

export default YoutubeSlice.reducer;
