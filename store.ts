// store.ts
import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // ... any other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
