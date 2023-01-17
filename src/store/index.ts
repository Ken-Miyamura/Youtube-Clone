import { configureStore } from "@reduxjs/toolkit";
import YoutubeReducer from "./slice";

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeReducer
  }
})
// 取得したstateの型
export type RootState = ReturnType<typeof store.getState>;
// stateを更新した時の型
export type AppDispatch = typeof store.dispatch;