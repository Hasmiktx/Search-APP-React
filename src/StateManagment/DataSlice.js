import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objecData: null,
  list: null,
  description: null,
};

export const dataSlice = createSlice({
  name: "objectData",
  initialState,
  reducers: {
    setObjectData: (state, action) => {
      state.objecData = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { setObjectData, setList, setDescription } = dataSlice.actions;

export default dataSlice.reducer;
