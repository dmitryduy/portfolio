import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { language } from "../../globalContants";
import { Page } from "../../data";


const initialState: {
  language: language
  pageInfo: {
    previousPage: Page
    activePage: Page
  }
} = {
  language: 'ru',
  pageInfo: {
    previousPage: Page.HEADER,
    activePage: Page.HEADER
  }
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<language>) {
      state.language = action.payload;
    },
    setActivePage(state, action: PayloadAction<Page>) {
      if (state.pageInfo.activePage === action.payload) {
        return state;
      }

      state.pageInfo = {
        previousPage: state.pageInfo.activePage,
        activePage: action.payload
      };
    }

  }
})

export const {setLanguage, setActivePage} = settingsSlice.actions;

export const {reducer: settingReducer} = settingsSlice;