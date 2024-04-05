import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginSlice from '../feature/loginSlice';
import homePageSlice from '../feature/homePageSlice';
import profileSlice from '../feature/profileSlice';
import bankDetailSlice from '../feature/bankDetailSlice';
import transactionSlice from '../feature/transactionSlice';
import withdrawPageSlice from '../feature/withdrawPageSlice';
import transactionDetailSlice from '../feature/transactionDetailSlice';
import adminTransactionSlice from '../feature/adminTransactionSlice';
import adminWithdrawSlice from '../feature/adminWithdrawSlice';

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    homePageSlice: homePageSlice,
    profileSlice: profileSlice,
    bankDetailSlice: bankDetailSlice,
    transactionsSlice: transactionSlice,
    withdrawDetailSlice: withdrawPageSlice,
    transactionDetailSlice: transactionDetailSlice,
    adminTransactionSlice: adminTransactionSlice,
    adminWithdrawSlice: adminWithdrawSlice
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
