import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
		clearVideos: (state) => {
			state.videos = [];
			state.nextPageToken = null;
		},
		changeSearchItem: (state, action: PayloadAction<string>) => {
			state.searchItem = action.payload;
		},
		clearSearchItem: (state) => {
			state.searchItem = "";
		}
	},
  // 追加のreducer
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
		builder.addCase(getHomePageVideo.fulfilled, (state, action) => {
			state.videos = action.payload.parsedData;
			state.nextPageToken = action.payload.nextPageToken;
		})
	},
})

export const { clearVideos, changeSearchItem, clearSearchItem } = YoutubeSlice.actions;
export default YoutubeSlice.reducer;
