import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../interface';
import { getHomePageVideos } from './reducers/getHomePageVideos';
import { getRecommendedVideos } from './reducers/getRecommendedVideos';
import { getSearchPageVideos } from './reducers/getSearchPageVideos';
import { getVideoDetails } from './reducers/getVideoDetails';

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
  // 追加のreducer（createAsyncThunkのreturn値はここで扱う）
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
		builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
			state.videos = action.payload.parsedData;
			state.nextPageToken = action.payload.nextPageToken;
		});
		builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
			state.videos = action.payload.parsedData;
			state.nextPageToken = action.payload.nextPageToken;
		});
		builder.addCase(getVideoDetails.fulfilled, (state, action) => {
			state.currentPlaying = action.payload;
		});
		builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
			state.recommendedVideos = action.payload.parsedData;
		});
	},
})

export const { clearVideos, changeSearchItem, clearSearchItem } = YoutubeSlice.actions;
export default YoutubeSlice.reducer;
