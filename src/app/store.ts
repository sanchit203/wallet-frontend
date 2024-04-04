import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginSlice from '../feature/loginSlice';
import homePageSlice from '../feature/homePageSlice';

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    homePageSlice: homePageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
