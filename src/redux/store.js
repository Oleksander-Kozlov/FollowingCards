import { configureStore } from '@reduxjs/toolkit';

import { followReducer } from './follow/slice';

export const store = configureStore({
  reducer: {
    users: followReducer,
  },
});
