import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { WITHDRAW_DETAIL } from "../constant/ApiPath";

export interface IWithdrawDetailSlice {
    withdrawableAmount: number,
  bankAccountNumber: string;
  nameOnBankAccount: string;
  ifscCode: string;
}

const initialState: IWithdrawDetailSlice = {
    bankAccountNumber: "",
    nameOnBankAccount: "",
    ifscCode: "",
    withdrawableAmount: 0.00
};

export const getWithdrawDetailThunk = createAsyncThunk(
  "getWithdrawDetail",
  async () => {
    try {
      const response = await axiosInstance.get(WITHDRAW_DETAIL);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const withdrawDetailSlice = createSlice({
  name: "withdrawDetailSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
    getWithdrawDetailThunk.fulfilled,
      (state, action: PayloadAction<IWithdrawDetailSlice>) => {
        state.withdrawableAmount = action.payload.withdrawableAmount;
        state.bankAccountNumber = action.payload.bankAccountNumber;
        state.ifscCode = action.payload.ifscCode;
        state.nameOnBankAccount = action.payload.nameOnBankAccount;
      }
    );
  }
});

export default withdrawDetailSlice.reducer;
