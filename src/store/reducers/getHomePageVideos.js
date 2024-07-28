import { createAsyncThunk } from "@reduxjs/toolkit";
import parseData from "../../utils/parseData";
// const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;
const API_KEY = 'AIzaSyBi9x44g7VKYjle7Ys8SSzYhhfLXz99mCs';
const baseURL = 'https://youtube.googleapis.com/youtube/v3';

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();

        const url = `${baseURL}/search?part=snippet&maxResults=20&q="Vikram"&key=${API_KEY}&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`;
        const response = await fetch(url);
        const data = await response.json();
        const items=data.items;
        // console.log(nextPageTokenFromState);
        const parsedData=await parseData(items);
        // console.log(parsedData);
        
        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}
    }
)