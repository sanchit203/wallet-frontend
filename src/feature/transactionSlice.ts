import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { GET_ALL_TRANSACTION } from "../constant/ApiPath";
import { ITransaction } from "./homePageSlice";

export interface ITransactionSlice {
  transactions: Array<ITransaction>
}

const initialState: ITransactionSlice = {
    transactions: []
};

export const getTransacationsThunk = createAsyncThunk(
  "getTransactions",
  async () => {
    try {
      const response = await axiosInstance.get(GET_ALL_TRANSACTION);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const transactionsSlice = createSlice({
  name: "transactionsSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
        getTransacationsThunk.fulfilled,
      (state, action: PayloadAction<Array<ITransaction>>) => {
        state.transactions = action.payload;
      }
    );
  }
});

export default transactionsSlice.reducer;
