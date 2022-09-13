import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stories: null,
  user: 'loading'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateStories: (state, action) => {
      state.stories = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateStories, updateUser } = appSlice.actions;
export const selectStories = (state) => state.app.stories;
export const selectUser = (state) => state.app.user;

export default appSlice.reducer;