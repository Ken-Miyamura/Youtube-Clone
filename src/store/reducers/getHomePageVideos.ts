import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HomePageVideos } from "../../interface";
import { parseData } from "../../utils";
import { API_KEY, YOUTUBE_API_URL } from "../../utils/const";
import { RootState } from '../index';

export const getHomePageVideo = createAsyncThunk(
  "youtubeApp/homePageVideos",
	async (isNext: boolean, { getState }) => {
		const {youtubeApp: { nextPageToken: nextPageTokenFromState, videos }} = getState() as RootState;
		const {data: {items, nextPageToken}} = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=20&key=${API_KEY}&part=snippet&type=video&${
			isNext ? `pageToken=${nextPageTokenFromState}` : ""
		}`);
		const parsedData: HomePageVideos[] = await parseData(items);
		return { parsedData: [...videos, ...parsedData], nextPageToken};
	}
);