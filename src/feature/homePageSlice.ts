import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { HOME_PAGE } from "../constant/ApiPath";

export interface ITransaction {
  id: Number;
  date: string;
  amount: Number;
  type: string;
}

interface IHomePageSlice {
  totalInvested: Number;
  withdrawable: Number;
  transactions: Array<ITransaction>;
}

const initialState: IHomePageSlice = {
  totalInvested: 0.0,
  withdrawable: 0.0,
  transactions: []
};

export const homePageThunk = createAsyncThunk("homePage", async () => {
  try {
    const response = await axiosInstance.get(HOME_PAGE);
    return response.data;
  } catch (err) {
    throw err;
  }
});

const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      homePageThunk.fulfilled,
      (state, action: PayloadAction<IHomePageSlice>) => {
        state.totalInvested = action.payload.totalInvested;
        state.withdrawable = action.payload.withdrawable;
        state.transactions = action.payload.transactions;
      }
    );
  }
});

export default homePageSlice.reducer;
