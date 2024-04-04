import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { CREATE_WITHDRAW_REQUEST, WITHDRAW_DETAIL } from "../constant/ApiPath";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface IWithdrawDetailSlice {
  withdrawableAmount: number;
  bankAccountNumber: string;
  nameOnBankAccount: string;
  ifscCode: string;
}

const initialState: IWithdrawDetailSlice = {
  bankAccountNumber: "",
  nameOnBankAccount: "",
  ifscCode: "",
  withdrawableAmount: 0.0
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

export const createWithdrawRequestThunk = createAsyncThunk(
  "createWithdrawRequest",
  async (amount: number) => {
    try {
      const response = axiosInstance.post(CREATE_WITHDRAW_REQUEST, { amount });
      toast.success("Withdraw request created successfully");
      return amount;
    } catch (ex: any) {
      if (ex instanceof AxiosError)
        toast.error(ex?.response?.data?.message, {
          theme: "dark"
        });
      throw ex;
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
    builder.addCase(
      createWithdrawRequestThunk.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.withdrawableAmount = state.withdrawableAmount - action.payload;
      }
    );
  }
});

export default withdrawDetailSlice.reducer;
