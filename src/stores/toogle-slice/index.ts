import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  isTrue: boolean;
}

const initialState: ToggleState = {
  isTrue: false
};

export const toggleSlice = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    setToggle: state => {
      state.isTrue = !state.isTrue;
    }
  }
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
