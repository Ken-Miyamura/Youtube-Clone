import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, YOUTUBE_API_URL } from "../../utils/const";
import { RootState } from '../index';
import { parseData } from '../../utils/parseData';
import { HomePageVideos } from "../../interface";

export const getSearchPageVideos = createAsyncThunk(
	"youtubeApp/searchPageVideos",
	async (isNext: boolean, {getState}) => {
		const {youtubeApp: {nextPageToken: nextPageTokenFromState, videos, searchItem}} = getState() as RootState;
		const {data: {items, nextPageToken}} = await axios.get(`${YOUTUBE_API_URL}/search?q=${searchItem}&key=${API_KEY}&part=snippet&type=video&${
			isNext ? `pageToken=${nextPageTokenFromState}` : ""
		}`);
		const parsedData: HomePageVideos[] = await parseData(items);
		return {parsedData: [...videos, ...parsedData], nextPageToken };
	}
)