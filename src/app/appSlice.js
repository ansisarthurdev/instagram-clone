import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stories: null,
};

export const appSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    updateStories: (state, action) => {
      state.stories = action.payload;
    },
  },
});

export const { updateStories } = appSlice.actions;
export const selectStories = (state) => state.app.stories;

export default appSlice.reducer;