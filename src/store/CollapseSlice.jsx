import { createSlice } from '@reduxjs/toolkit';

const CollapseSlice = createSlice({
  name: 'Collapse',
  initialState: {
    collapse: false,
  },
  reducers: {
    handleCollapse: (state) => {
      state.collapse = !state.collapse;
    },
  },
});

export const { handleCollapse } = CollapseSlice.actions;
export default CollapseSlice.reducer;
