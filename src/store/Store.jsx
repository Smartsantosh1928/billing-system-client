import { configureStore } from '@reduxjs/toolkit';
import CollapseReducer from './CollapseSlice';

const Store = configureStore({
  reducer: {
    collapse : CollapseReducer,
  },
});

export default Store;
