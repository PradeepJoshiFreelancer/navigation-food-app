import { createSlice } from "@reduxjs/toolkit";
import { log } from "react-native-reanimated";

const favorateSlice = createSlice({
  name: "favorate",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorate: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorate: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorate = favorateSlice.actions.addFavorate;
export const removeFavorate = favorateSlice.actions.removeFavorate;
export default favorateSlice.reducer;
