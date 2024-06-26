import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { BANK_DETAILS } from "../constant/ApiPath";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export interface IBankDetailSlice {
  bankAccountNumber: string;
  nameOnBankAccount: string;
  ifscCode: string;
}

const initialState: IBankDetailSlice = {
  bankAccountNumber: "",
  nameOnBankAccount: "",
  ifscCode: ""
};

export const getBankDetailThunk = createAsyncThunk(
  "getBankDetail",
  async () => {
    try {
      const response = await axiosInstance.get(BANK_DETAILS);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const updateBankDetailThunk = createAsyncThunk(
  "updateBankDetail",
  async (updateBankDetailRequest: IBankDetailSlice) => {
    try {
      const response = await axiosInstance.post(
        BANK_DETAILS,
        updateBankDetailRequest
      );
      toast.success("Bank details updated successfully", {theme: "dark"});
      return response.data;
    } catch(ex: any) {
      if (ex instanceof AxiosError)
          toast.error(ex?.response?.data?.message, {
              theme: "dark"
          });
      throw ex;
  }
  }
);

const bankDetailSlice = createSlice({
  name: "bankDetailSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getBankDetailThunk.fulfilled,
      (state, action: PayloadAction<IBankDetailSlice>) => {
        state.bankAccountNumber = action.payload.bankAccountNumber;
        state.ifscCode = action.payload.ifscCode;
        state.nameOnBankAccount = action.payload.nameOnBankAccount;
      }
    );
    builder.addCase(
      updateBankDetailThunk.fulfilled,
      (state, action: PayloadAction<IBankDetailSlice>) => {
        state.bankAccountNumber = action.payload.bankAccountNumber;
        state.ifscCode = action.payload.ifscCode;
        state.nameOnBankAccount = action.payload.nameOnBankAccount;
      }
    );
  }
});

export default bankDetailSlice.reducer;
