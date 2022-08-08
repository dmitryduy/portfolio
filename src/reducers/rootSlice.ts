
import { settingReducer } from "./settingsSlice/settingsSlice";
import { combineReducers } from "@reduxjs/toolkit";


const rootSlice = combineReducers({
  settings: settingReducer
});

export default rootSlice;