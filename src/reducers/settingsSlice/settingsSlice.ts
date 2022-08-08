import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { language } from "../../globalContants";


const initialState: {
  language: language
} = {
  language: 'ru'
} ;

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
   setLanguage(state, action: PayloadAction<language>) {
     state.language = action.payload;
   }

  }
})

export const {setLanguage} = settingsSlice.actions;

export const {reducer: settingReducer} = settingsSlice;